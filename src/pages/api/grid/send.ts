import grid from '@sendgrid/mail'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {

	if (req.method !== 'POST') {
		res.status(400).json({ message: 'Method not valid' })
	}

	const { id, owner_id, name, email, company, course_name } = req.body

	console.log(id, owner_id, name, email, company, course_name)

	if (!id || !owner_id || !name || !email || !company || !course_name) return res.status(400).json({ message: 'Invalid request' })

	// Api serverless responsável por enviar os emails na emissão de certificado
	// Então vamos receber uma request do tipo post
	// E vamos processar o envio
	const apikey = process.env.SENDGRID_API_KEY || ''
	grid.setApiKey(apikey)

	console.log(req.body)

	const emailRequest = {
		to: req.body.email, // Change to your recipient
		from: 'Certificado.io<oi@certificado.io>', // Change to your verified sender
		subject: `${company}: Você recebeu um certificado.`,
		text: 'Olá, você recebeu um certificado.',
		html: `
        
<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
<!--<![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		@media (max-width:620px) {
			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}
		}
	</style>
</head>
<body style="background-color: #f3f3f3; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3f3f3;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 600px;" width="600">
<tbody>
<tr>
<td class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 60px; padding-right: 60px; padding-top: 40px; padding-bottom: 40px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="width:100%;padding-right:0px;padding-left:0px;">
<div style="line-height:10px"><img src="https://fnzvumybvbvrpaxezyhc.supabase.in/storage/v1/object/public/app/logo_1.png" style="display: block; height: auto; border: 0; width: 192px; max-width: 100%;" width="192"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:40px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #191919; line-height: 1.2; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px;"><span style="font-size:16px;">Olá, ${req.body.name}!</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="text-align:center;width:100%;padding-top:18px;">
<h1 style="margin: 0; color: #191919; direction: ltr; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; font-size: 20px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Parabéns por concluir o(a) ${req.body.course_name}.</strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:18px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #191919; line-height: 1.2; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px;"><span style="font-size:16px;">${req.body.company} usa o Certificado.io para possibilitar que seu certificado esteja sempre disponível e com validação online.</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="text-align:left;padding-top:24px;">
<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:52px;width:206px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#3c59be"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]-->
<div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3c59be;border-radius:4px;width:auto;border-top:0px solid #8a3b8f;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:10px;padding-bottom:10px;font-family:Roboto, Tahoma, Verdana, Segoe, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:normal;"><a href="https://app.certificado.io/c/${req.body.id}" style="font-size: 16px; line-height: 2;color: #fff; text-decoration: none; word-break: break-word; mso-line-height-alt: 32px;"><strong>Ver meu certificado</strong></a></span></div>
<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:16px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #8c8c8c; line-height: 1.2; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px;"><span style="font-size:16px;">https://app.certificado.io/c/${req.body.id}</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:24px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #191919; line-height: 1.2; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px;"><span style="font-size:16px;">Agora você pode adicionar o certificado ao seu perfil no LinkedIn, imprimir em alta qualidade e também compartilhar em suas redes sociais.</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:60px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #191919; line-height: 1.2; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px;"><span style="font-size:13px;"><strong><span style="color:#8c8c8c;">© 2021 Certificado.io</span></strong></span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>
        `
	}

	const response = await grid.send(emailRequest)

	// console.log(response)

	res.status(200).json({ message: 'ok' })
}

export default handler
