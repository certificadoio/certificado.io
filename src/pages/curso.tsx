import { NextPage } from 'next'
import {
  Container,
  Header,
  MaxWidth,
  Footer,
  NewCourse,
  SiteMap,
  ProgressBar,
  ModalSuccess,
  AuthProvider,
} from '../components'

const Curso: NextPage = () => {
  return (
    <AuthProvider>
      <Container>
        <Header certificates={false} />

        <SiteMap />
        <ProgressBar />

        <MaxWidth>
          <NewCourse />
        </MaxWidth>

      </Container>
      <Footer />
      <ModalSuccess />
    </AuthProvider>
  )
}

export default Curso