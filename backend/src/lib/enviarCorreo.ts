import { Resend } from 'resend';

const apiKey = process.env.API_KEY_RESEND ?? '';
const resend = new Resend(apiKey);

export async function enviarCorreo(email: string, title: string, text: string) {
  const html = `
  <div style="background: #E75F0B; color: white; text-align: center; padding: 10px; margin: 0; border-radius: 15px">
    <h1 style="font-weight: bold; font-size: 54px; padding: 0; margin: 0">${title}</h1>
    <p style="font-size: 24px; padding: 0; color: white; margin-top: -2px">${text}</p>
  </div>`;

  const response = await resend.emails.send({
    from: 'NextStep <nextstep@nextstep-web.online>',
    to: [email],
    subject: title,
    html: html,
  });

  if (response.error) {
    console.error(response.error);
    return false;
  }
}
