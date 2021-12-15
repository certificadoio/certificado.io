import { createClient } from '@supabase/supabase-js'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {

    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Bad request' })
    }

    const { certificateId } = JSON.parse(req.body)

    // console.log(certificateId)

    // Criando uma instancia do supabase com a key master
    // para poder ter acesso a todos os dados e retornar
    // o específico.
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_KEY || ''
    )

    let { data, error } = await supabase
        .from('certificates_io')
        .select(`
            created_at, name, id_view,
            courses_io (
              title
            ),
            themes_io (
              title
            )`)
        .eq('id_view', certificateId)

    if (error) console.error(error)

    const dataToSend = data ? data[0] : undefined

    res.status(200).json({ data: dataToSend })
}

export default handler