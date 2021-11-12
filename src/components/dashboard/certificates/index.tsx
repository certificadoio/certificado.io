import Actions from './Actions'
import TableCertificates from './TableCertificates'
import WrapperCertificates from './WrapperCertificates'

const Certificates: React.FC = () => {
    return (
        <>
            <Actions />
            <WrapperCertificates>
                <TableCertificates />
            </WrapperCertificates>
        </>
    )
}

export default Certificates
