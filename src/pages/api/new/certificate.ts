import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {

    if (req.method !== "POST")
        return res.status(400).json({
            data: [],
            message: 'Invalid method'
        })





    return res.status(200).json({
        data: [],
        message: 'ok'
    })
}

export default handler