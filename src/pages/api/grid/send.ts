import grid from '@sendgrid/mail'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {

    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Method not valid' })
    }

    const { id, owner_id, name, email } = req.body

    if (!id || !owner_id || !name || !email) return res.status(400).json({ message: 'Invalid request' })

    // Api serverless responsável por enviar os emails na emissão de certificado
    // Então vamos receber uma request do tipo post
    // E vamos processar o envio
    const apikey = process.env.SENDGRID_API_KEY || ''
    grid.setApiKey(apikey)

    const emailRequest = {
        to: req.body.email, // Change to your recipient
        from: 'oi@certificado.io', // Change to your verified sender
        subject: `${req.body.name}, SEU CERTIFICADO FOI EMITIDO!`,
        text: 'Seu certificado foi emitido com sucesso, e você pode conferir clicando no link a seguir',
        html: `
        <h3>CERTIFICADO.IO</h3>
        <p><b>${req.body.name}</b> seu certificado foi emitido com sucesso, <br/>
        e você pode conferir clicando no link a seguir!
        <p>
        <br/>
        <a href="https://app.certificado.io/c/${req.body.id}">Ver certificado</a>
        `
    }

    const response = await grid.send(emailRequest)

    console.log(response)

    res.status(200).json({ message: 'ok' })
}

export default handler
