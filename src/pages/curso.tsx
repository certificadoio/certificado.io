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

const index: React.FC = () => {
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

export default index