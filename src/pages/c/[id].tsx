import { Flex, Skeleton, Stack, Text } from '@chakra-ui/react'

import { theme } from '../../styles/theme'
import {
  Container,
  Footer,
  CertificatePublicPreview
} from '../../components'

import Head from 'next/head'
import HeaderViewCertificate from '../../components/viewcertificate/header'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { createClient } from '@supabase/supabase-js'
import { jsPDF } from "jspdf";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export interface CertificateToShow {
  created_at: string,
  name: string,
  id_view: string
  courses_io: {
    title: string,
    company_name: string,
  },
  themes_io: {
    logo: string,
    title: string,
    subtitle: string,
    signature: string,
    graduated_in: string,
    footer_signature: string,
    primary_color: string,
    secondary_color: string,
    primary_bg_color: string,
    secondary_bg_color: string,
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {

//   return {
//     paths: [],
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {

//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL || '',
//     process.env.SUPABASE_KEY || ''
//   )

//   let { data, error } = await supabase
//     .from('certificates_io')
//     .select(`
//         created_at, name, id_view,
//         courses_io (
//           title, company_name
//         ),
//         themes_io (
//           logo,
//           title,
//           subtitle,
//           signature,
//           graduated_in,
//           footer_signature,
//           primary_color,
//           secondary_color,
//           primary_bg_color,
//           secondary_bg_color
//         )`)
//     .eq('id_view', params?.id)

//   if (error) console.error(error)

//   const dataToSend = data ? data[0] : undefined

//   if (!dataToSend) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/'
//       }
//     }
//   }

//   return {
//     props: {
//       data: dataToSend
//     },
//     revalidate: 60
//   }
// }

const ViewCertificate: NextPage = () => {

  const [data, setData] = useState<CertificateToShow | undefined>(undefined)
  const router = useRouter()

  const fetchData = async () => {

    const idQuery = router.query?.id

    if (!idQuery) return

    const response = await fetch('/api/c/get', {
      method: 'POST',
      body: JSON.stringify({
        certificateId: idQuery
      })
    })

    const data = await response.json()

    setData(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [router.query])

  const handleDownloadPDF = () => {
    print()
  }

  return (
    <>
      {!data &&
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      }

      {data &&
        <>
          <Head>
            {/* <!-- HTML Meta Tags --> */}
            <title>{data?.name} - {data?.courses_io?.title}</title>
            <meta name="description" content="Certificado emitido por $EMPRESA e conferido ?? $ALUNO." />

            {/* <!-- Facebook Meta Tags --/> */}
            <meta property="og:url" content="$URL-DO-CERTIFICADO" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="$NOME_ALUNO - $NOME_CURSO" />
            <meta property="og:description" content="Certificado emitido por $EMPRESA e conferido ?? $ALUNO." />
            <meta property="og:image" content="$URL-IMAGE" />

            {/* <!-- Twitter Meta Tags --/> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="certificado.io" />
            <meta property="twitter:url" content="$URL-DO-CERTIFICADO" />
            <meta name="twitter:title" content="$NOME_ALUNO - $NOME_CURSO" />
            <meta name="twitter:description" content="Certificado emitido por $EMPRESA e conferido ?? $ALUNO." />
            <meta name="twitter:image" content="$URL-IMAGE" />
          </Head>

          <Container>
            <HeaderViewCertificate
              download={handleDownloadPDF}
              data={data}
            />

            <Flex
              position="relative"
              minHeight="calc(100vh - 80px - 60px)"
              flexDirection="column"
            >
              <Flex
                width="100%"
                flex="1"
                background={theme.blue300} />

              <Flex
                width="100%"
                flex="1"
                background={theme.blue500} />

              <Flex
                width="100%"
                flex="1"
                background={theme.blue300} />

              <Flex
                position="absolute"
                width="100%"
                height="100%"
                direction="column"
                align="center"
              >
                <Text
                  fontWeight="700"
                  fontSize={["16px", "27px", "32px"]}
                  color="#f7f7f7"
                  marginTop="50px"
                >
                  {data?.courses_io?.title}
                </Text>

                <Text
                  marginTop="8px"
                  fontSize={["12px", "14px", "16px"]}
                  fontWeight="500"
                  color={theme.blue100}
                >
                  {data?.courses_io?.company_name}
                </Text>

                <CertificatePublicPreview
                  data={data}
                />

              </Flex>
            </Flex>

          </Container>
          <Footer background={theme.blue300} />
        </>
      }
    </>
  )
}

export default ViewCertificate
