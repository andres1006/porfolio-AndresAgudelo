import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { MAILERSEND_API_KEY, SENDER_EMAIL, SENDER_NAME, RECIPIENT_EMAIL, RECIPIENT_NAME } from '@/lib/mailersend-config';

// Interfaz para los datos del formulario de contacto
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        // Verificar la configuración de MailerSend
        if (!MAILERSEND_API_KEY) {
            return NextResponse.json(
                { error: 'Configuración de correo incompleta', details: 'API key no configurada' },
                { status: 500 }
            );
        }

        if (!SENDER_EMAIL || !SENDER_EMAIL.includes('@')) {
            return NextResponse.json(
                { error: 'Configuración de correo incompleta', details: 'Email de remitente no válido' },
                { status: 500 }
            );
        }

        // Obtener los datos del cuerpo de la solicitud
        const data = await request.json() as ContactFormData;

        // Validar que todos los campos requeridos estén presentes
        if (!data.name || !data.email || !data.subject || !data.message) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }


        try {
            // Inicializar MailerSend con la API key
            const mailerSend = new MailerSend({
                apiKey: MAILERSEND_API_KEY,
            });

            // Crear el remitente (debe ser un dominio verificado en tu cuenta de MailerSend)
            const sender = new Sender(SENDER_EMAIL, SENDER_NAME);

            // Crear el destinatario
            const recipients = [
                new Recipient(RECIPIENT_EMAIL, RECIPIENT_NAME)
            ];

            // Preparar el contenido del correo
            const emailParams = new EmailParams()
                .setFrom(sender)
                .setTo(recipients)
                .setReplyTo(new Sender(data.email, data.name))
                .setSubject(data.subject)
                .setText(data.message)
                .setHtml(`
                <div>
                  <h3>Nuevo mensaje de contacto</h3>
                  <p><strong>Nombre:</strong> ${data.name}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Asunto:</strong> ${data.subject}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${data.message.replace(/\n/g, '<br>')}</p>
                </div>
              `);

            // Enviar el correo
            const response = await mailerSend.email.send(emailParams);

            return NextResponse.json({ success: true });
        } catch (mailError) {
            return NextResponse.json(
                {
                    error: 'Error al enviar el correo',
                    details: mailError instanceof Error ? mailError.message : 'Error desconocido en MailerSend'
                },
                { status: 500 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: 'Error interno del servidor', details: error instanceof Error ? error.message : 'Error desconocido' },
            { status: 500 }
        );
    }
} 