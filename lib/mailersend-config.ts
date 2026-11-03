/**
 * Configuración de MailerSend
 * 
 * IMPORTANTE: Reemplaza estos valores con tus propias credenciales de MailerSend
 * 1. Regístrate en https://www.mailersend.com/
 * 2. Crea una API key en Dashboard > API Keys
 * 3. Verifica tu dominio en Dashboard > Domains
 */

// API key de MailerSend
export const MAILERSEND_API_KEY = process.env.MAILERSEND_API_KEY ?? '';

// Email de remitente verificado en MailerSend
export const SENDER_EMAIL = process.env.MAILERSEND_SENDER_EMAIL ?? 'no-reply@trial-z86org8pjknlew13.mlsender.net';

// Nombre del remitente
export const SENDER_NAME = 'Andrés Agudelo';

// Email de destino para los mensajes de contacto
export const RECIPIENT_EMAIL = 'andresagudelo1006@gmail.com';

// Nombre del destinatario
export const RECIPIENT_NAME = 'Andrés Agudelo'; 