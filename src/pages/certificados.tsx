import {
  Container,
  Header,
  MaxWidth,
  Footer,
  Certificates,
  AuthProvider,
} from '../components'

import ModalDeleteCertificate from '../components/dashboard/modal/ModalDeleteCertificate'

const index: React.FC = () => {
  return (
    <AuthProvider>
      <Container>
        <Header certificates={true} />

        <MaxWidth>
          <Certificates />
        </MaxWidth>

      </Container>
      <Footer />
      <ModalDeleteCertificate />
    </AuthProvider>
  )
}

export default index
