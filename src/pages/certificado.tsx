import { NextPage } from 'next'
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
import useGlobal from '../store/useGlobal'

const Certificado: NextPage = () => {

  const global = useGlobal(state => state)

  // console.log(global.certificatesLength)
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

export default Certificado
