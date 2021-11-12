import React from 'react'
import CertificateDetails from './CertificateDetails'
import WrapperNewCertificate from './WrapperNewCertificate'

const NewCertificate: React.FC = () => {
    return (
        <>
            <WrapperNewCertificate>
                <CertificateDetails />
            </WrapperNewCertificate>
        </>
    )
}

export default NewCertificate
