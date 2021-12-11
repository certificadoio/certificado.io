import { NextPage } from 'next'
import {
  Container,
  Header,
  MaxWidth,
  Courses,
  Footer,
  ModalDelete,
  AuthProvider,
} from '../components'
import ModalViewDetailsCourse from '../components/dashboard/modal/ModalViewDetailsCourse'

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Container>
        <Header certificates={false} />

        <MaxWidth>
          <Courses />
        </MaxWidth>

      </Container>
      <Footer />
      <ModalDelete />
      <ModalViewDetailsCourse />
    </AuthProvider>
  )
}

export default Home
