import { useState } from 'react'
import { CardCertificateValid, CardVerify, ContainerValidar, FooterValidar, HeaderValidar } from '../components'

interface ICertificate {
    courses_io: {
        title: string
    },
    created_at: string,
    id: string,
    name: string,
    themes_io: {
        title: string
    }
}

const Validar: React.FC = () => {

    const [certificateId, setCertificateId] = useState('')
    const [certificate, setCertificate] = useState<ICertificate | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {

    }

    const getCertificate = async () => {

        setLoading(true)

        if (certificateId === '') {
            alert('Por favor, informar um código')
            return setLoading(false)
        }

        const response = await fetch('/api/c/get', {
            method: 'POST',
            body: JSON.stringify({ certificateId })
        })

        const { data } = await response.json()

        setCertificate(data)
        setLoading(false)
    }

    return (
        <>
            <HeaderValidar />

            <ContainerValidar>
                {!certificate?.id &&
                    <CardVerify
                        certificateId={certificateId}
                        setCertificateId={setCertificateId}
                        loading={loading}
                        getCertificate={getCertificate}
                    />
                }
                {certificate?.id &&
                    <CardCertificateValid
                        certificate={certificate}
                    />
                }
            </ContainerValidar>

            <FooterValidar />
        </>
    )
}

export default Validar