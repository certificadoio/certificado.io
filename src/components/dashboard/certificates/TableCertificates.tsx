import { Table, Tbody, Stack, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import useGlobal from '../../../store/useGlobal'
import { supabase } from '../../../utils/supabaseClient'
import NoCertificate from './NoCertificate'
import Pagination from './Pagination'
import TableHead from './TableHead'
import TableRow from './TableRow'

interface Certificate {
    id: string,
    course_id: string,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
    theme_id: string,
    owner_id: string
}

const TableCertificates: React.FC = () => {

    const global = useGlobal(state => state)

    const [dataFiltered, setDataFiltered] = useState<Certificate[] | null>(null)

    const fetcher = async () => {
        let { data: certificates, error } = await supabase
            .from<Certificate>('certificates_io')
            .select('*')

        return certificates
    }

    const response = useSWR('/certificates', fetcher, {
        revalidateOnFocus: false,
    })

    useEffect(() => {
        global.setCertificatesLength(response.data?.length || 0)
    }, [response.data])

    useEffect(() => {
        let data = response.data

        let filter = data
            ?.filter(
                certificate => certificate.name?.toLowerCase()
                    .includes(global.searchText.toLowerCase()) || certificate.email?.toLowerCase()
                        .includes(global.searchText.toLowerCase())
            ) || null

        setDataFiltered(filter)
    }, [global.searchText])

    return (
        <>
            {response.data?.length !== 0 &&
                <Table variant="simple">

                    <TableHead />

                    <Tbody
                        background="#fff"
                    >

                        {global.searchText === "" && response.data && response.data?.map(certificate => (
                            <TableRow key={certificate.id} data={certificate} />
                        ))}

                        {global.searchText !== "" && dataFiltered && dataFiltered?.map(certificate => (
                            <TableRow key={certificate.id} data={certificate} />
                        ))}

                    </Tbody>

                </Table>
            }

            {/* <Pagination /> */}



            {!response.data && (
                <Stack width="100%">
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                </Stack>
            )}

            {response.data?.length === 0 &&
                <NoCertificate />
            }
        </>
    )
}

export default TableCertificates
