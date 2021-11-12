import {
  Container,
  Header,
  MaxWidth,
  Footer,
  SiteMap,
  ProgressBar,
  NewCertificate,
  AuthProvider,
} from '../components'
import ModalCertificateCreated from '../components/dashboard/modal/ModalCertificateCreated'
import ModalCertificateEdited from '../components/dashboard/modal/ModalCertificateEdited'

const index: React.FC = () => {
  return (
    <AuthProvider>
      <Container>
        <Header certificates={true} />

        <SiteMap />

        <MaxWidth>
          <NewCertificate />
        </MaxWidth>

      </Container>
      <Footer />
      <ModalCertificateEdited />
      <ModalCertificateCreated />
    </AuthProvider>
  )
}

export default index
