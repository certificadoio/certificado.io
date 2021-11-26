import { Flex, Text } from '@chakra-ui/react'

import { theme } from '../../styles/theme'
import {
  Container,
  Footer,
  CertificatePublicPreview
} from '../../components'

import Link from 'next/link'
import HeaderViewCertificate from '../../components/viewcertificate/header'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from '@supabase/supabase-js'

export interface CertificateToShow {
  data?: {
    created_at: string,
    name: string,
    id: string
    courses_io: {
      title: string,
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
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const supabase = createClient(
    'https://qoxryvzecwyagzrewdcn.supabase.co',
    process.env.SUPABASE_KEY || ''
  )

  let { data, error } = await supabase
    .from('certificates_io')
    .select(`
        created_at, name, id,
        courses_io (
          title
        ),
        themes_io (
          logo,
          title,
          subtitle,
          signature,
          graduated_in,
          footer_signature,
          primary_color,
          secondary_color,
          primary_bg_color,
          secondary_bg_color
        )`)
    .eq('id', params?.id)

  if (error) console.error(error)

  const dataToSend = data ? data[0] : undefined

  return {
    props: {
      data: dataToSend
    },
    revalidate: 60
  }
}

const ViewCertificate: React.FC<CertificateToShow> = ({ data }) => {

  console.log(data)

  return (
    <>
      <Container>
        <HeaderViewCertificate />

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
              {data?.themes_io.title}
            </Text>
            <Text
              marginTop="8px"
              fontSize={["12px", "14px", "16px"]}
              fontWeight="500"
              color={theme.blue100}
            >
              {data?.courses_io.title}
            </Text>

            <CertificatePublicPreview data={data} />

          </Flex>
        </Flex>

      </Container>
      <Footer background={theme.blue300} />
    </>
  )
}

export default ViewCertificate
