import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { z } from 'zod';
import { MAILERSEND_API_KEY, SENDER_EMAIL, SENDER_NAME, RECIPIENT_EMAIL, RECIPIENT_NAME } from '@/lib/mailersend-config';
import { escaparHtml } from '@/lib/escapar-html';

// Configuración para indicar que esta ruta es dinámica
export const dynamic = 'force-dynamic';

const contactoSchema = z.object({
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(254),
    subject: z.string().trim().min(1).max(200),
    message: z.string().trim().min(1).max(5000),
    autorizacion: z.literal(true),
    oferta: z.string().trim().max(60).optional(),
    origen: z.string().trim().max(300).optional(),
    utm: z.record(z.string().max(40), z.string().max(200)).optional(),
    empresa: z.string().optional(), // Trampa para bots: el campo es invisible para las personas.
});

type Contacto = z.infer<typeof contactoSchema>;

async function guardarLead(c: Contacto): Promise<boolean> {
    const url = process.env.ASYGNUZ_LEADS_URL;
    const secreto = process.env.ASYGNUZ_LEADS_SECRET;
    if (!url || !secreto) return false;
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${secreto}` },
            body: JSON.stringify({
                nombre: c.name, email: c.email, asunto: c.subject, mensaje: c.message,
                oferta: c.oferta, origen: c.origen, utm: c.utm, autorizacion: true,
            }),
            signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) console.error('No se guardó el lead:', res.status);
        return res.ok;
    } catch (error) {
        console.error('No se guardó el lead:', error instanceof Error ? error.message : 'error');
        return false;
    }
}

async function enviarAviso(c: Contacto): Promise<boolean> {
    if (!MAILERSEND_API_KEY || !SENDER_EMAIL.includes('@')) return false;
    try {
        const mailerSend = new MailerSend({ apiKey: MAILERSEND_API_KEY });
        const emailParams = new EmailParams()
            .setFrom(new Sender(SENDER_EMAIL, SENDER_NAME))
            .setTo([new Recipient(RECIPIENT_EMAIL, RECIPIENT_NAME)])
            .setReplyTo(new Sender(c.email, c.name))
            .setSubject(c.subject)
            .setText(c.message)
            .setHtml(`
                <div>
                  <h3>Nuevo mensaje de contacto</h3>
                  <p><strong>Nombre:</strong> ${escaparHtml(c.name)}</p>
                  <p><strong>Email:</strong> ${escaparHtml(c.email)}</p>
                  <p><strong>Asunto:</strong> ${escaparHtml(c.subject)}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${escaparHtml(c.message).replace(/\n/g, '<br>')}</p>
                </div>
              `);
        await mailerSend.email.send(emailParams);
        return true;
    } catch (error) {
        console.error('No se envió el aviso:', error instanceof Error ? error.message : 'error');
        return false;
    }
}

export async function POST(request: Request) {
    const datos = contactoSchema.safeParse(await request.json().catch(() => null));
    if (!datos.success) {
        return NextResponse.json({ error: 'Revisa los campos del formulario.' }, { status: 400 });
    }
    // Al bot se le responde igual para que no sepa que fue filtrado.
    if (datos.data.empresa) return NextResponse.json({ success: true });

    // El lead se guarda primero: si el correo falla, no se pierde.
    const guardado = await guardarLead(datos.data);
    const avisado = await enviarAviso(datos.data);
    if (!guardado && !avisado) {
        return NextResponse.json(
            { error: 'No se pudo enviar', details: 'Intenta de nuevo o escríbeme por WhatsApp.' },
            { status: 502 }
        );
    }
    return NextResponse.json({ success: true });
}
