# Portafolio de Andrés Agudelo

## Configuración del formulario de contacto

El formulario de contacto utiliza [MailerSend](https://www.mailersend.com/), un servicio profesional de envío de correos electrónicos con una generosa capa gratuita.

### Configuración de MailerSend

Para que el formulario de contacto funcione correctamente, sigue estos pasos:

1. **Regístrate en MailerSend**:

   - Crea una cuenta en [MailerSend](https://www.mailersend.com/)
   - Verifica tu cuenta siguiendo las instrucciones enviadas a tu correo

2. **Verifica un dominio**:

   - Ve a "Domains" en el dashboard
   - Añade y verifica un dominio siguiendo las instrucciones
   - Este dominio será usado como remitente de los correos

3. **Crea una API key**:

   - Ve a "API Keys" en el dashboard
   - Crea una nueva API key con permisos para enviar correos
   - Copia la API key (solo se muestra una vez)

4. **Actualiza la configuración**:

   - Abre el archivo `lib/mailersend-config.ts`
   - Actualiza los siguientes valores:

     ```typescript
     // API key de MailerSend
     export const MAILERSEND_API_KEY = "tu_api_key_aqui";

     // Email de remitente verificado en MailerSend
     export const SENDER_EMAIL = "no-reply@tudominio.com";

     // Email de destino para los mensajes de contacto
     export const RECIPIENT_EMAIL = "andresagudelo1006@gmail.com";
     ```

5. **Verifica la configuración**:
   ```bash
   npm run verify-mailersend
   ```
   Este comando verificará que hayas configurado correctamente MailerSend.

### Ventajas de MailerSend

- Alta tasa de entrega de correos
- Estadísticas detalladas de envío y apertura
- Capa gratuita generosa (12,000 correos al mes)
- API robusta y bien documentada

## Desarrollo

```bash
npm run dev
```

## Construcción

```bash
npm run build
```

## Despliegue

Este proyecto está configurado para exportación estática, lo que permite desplegarlo en servicios como GitHub Pages, Netlify, Vercel, etc.
