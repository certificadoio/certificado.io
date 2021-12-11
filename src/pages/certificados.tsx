import { NextPage } from 'next'
import {
  Container,
  Header,
  MaxWidth,
  Footer,
  Certificates,
  AuthProvider,
} from '../components'
import LimitCertificate from '../components/dashboard/LimitCertificate'
import ModalDeleteCertificate from '../components/dashboard/modal/ModalDeleteCertificate'
import ModalLimitCertificate from '../components/dashboard/modal/ModalLimitCertificate'

const Certificados: NextPage = () => {
  return (
    <AuthProvider>

      <Container>
        <LimitCertificate />
        <Header certificates={true} />

        <MaxWidth>
          <Certificates />
        </MaxWidth>

      </Container>

      <Footer />

      <ModalDeleteCertificate />
      <ModalLimitCertificate />
    </AuthProvider>
  )
}

export default Certificados
