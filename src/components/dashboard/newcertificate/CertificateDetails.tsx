import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Select, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import useGlobal from '../../../store/useGlobal'
import { theme } from '../../../styles/theme'
import { supabase } from '../../../utils/supabaseClient'
import axios from 'axios'
import shortid from 'shortid'
import { useRouter } from 'next/router'

interface ICertificates {
    id: string,
    course_id: string,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
    theme_id: string,
    owner_id: string
}

interface IThemes {
    id: string,
    owner_id: string,
    course_id: string,
}

const CertificateDetails = () => {

    const global = useGlobal(state => state)

    const [certificates, setCertificates] = useState<ICertificates[] | null>(null)
    const [themes, setThemes] = useState<IThemes[] | null>(null)
    const [companyName, setCompanyName] = useState('')
    const [courseName, setCourseName] = useState('')

    const [data, setData] = useState({
        course_id: "",
        name: "",
        email: "",
        created_at: "",
        owner_id: "",
        id_view: "",
        theme_id: "",
    })
    // Fetch data courses

    const fetcher = async () => {
        let { data: courses, error } = await supabase
            .from('courses_io')
            .select('id, title')

        return courses
    }

    const courses = useSWR('/courses', fetcher, {
        revalidateOnFocus: false,
    })

    useEffect(() => {

        // Injetando o id do usuário logado e a data

        (async () => {
            const user = await supabase.auth.user()

            setCompanyName(user?.user_metadata?.company)

            if (global.idToAction) {
                let { data: certificates, error } = await supabase
                    .from<ICertificates>('certificates_io')
                    .select('*')
                    .eq('id', global.idToAction)

                if (error) console.error(error.message)

                if (!error) {
                    setCertificates(certificates)
                }
            }

            // Formatação da data
            let dataAtual = new Date(Date.now())
            let dataFormated = dataAtual.toLocaleDateString().split('/')
            const dataToSet = dataFormated[2] + '-' + dataFormated[1] + '-' + dataFormated[0]

            setData({ ...data, owner_id: user?.id || "", created_at: dataToSet, id_view: shortid.generate() })
        })()

    }, [])

    const handlerSubmit = async () => {

        if (
            data.course_id === "" || data.name === ""
            || data.email === "" || data.created_at === "" || data.email.indexOf("@") === -1
        ) {
            return console.error('Nenhum campo pode ser vazio')
        }

        const response = await supabase
            .from('certificates_io')
            .insert([data])

        if (response.error) return console.error(response.error)

        // Pegar os dados a serem enviados
        const cert = response?.data[0].id || ''
        console.log(cert);
        console.log(response);

        let sendEmail = await axios.post('/api/grid/send', {
            id: response?.data[0].id_view,
            owner_id: response?.data[0].owner_id,
            email: response?.data[0].email,
            name: response?.data[0].name,
            company: companyName,
            course_name: courseName
        })

        if (response.data.length !== 0) {
            global.toggleModalCertificateCreated()
        }
    }

    const handlerUpdate = async () => {

        if (certificates?.length === 0) return console.error('Nenhum campo pode ser vazio')

        const owner_id_array = certificates?.map(each => {
            if (each.id != null) {
                return each.owner_id
            }
        })

        interface IProps {
            owner_id: string | undefined,
            name?: string,
            email?: string,
        }

        let dataToUpdate: IProps = {
            owner_id: owner_id_array ? owner_id_array[0] : '',
        }

        if (data.name !== '') { dataToUpdate.name = data.name }
        if (data.email !== '') { dataToUpdate.email = data.email }

        const response = await supabase
            .from('certificates_io')
            .update(dataToUpdate)
            .eq('id', global.idToAction)

        if (response.error) return console.error(response.error)

        let sendEmail = await axios.post('/api/grid/send', {
            id: response?.data[0].id_view,
            owner_id: response?.data[0].owner_id,
            email: response?.data[0].email,
            name: response?.data[0].name,
            company: companyName,
            course_name: courseName
        })

        if (response.data.length !== 0) {
            global.toggleModalCertificateEdited()
        }
    }


    const handleSelectCourse = async (value: string) => {

        if (value.length === 0) return

        const selected = courses.data?.filter(course => course.id === value && course)

        const course_name = selected ? selected[0]?.title : ""

        if (course_name === "") return

        try {
            let { data: themes, error } = await supabase
                .from<IThemes>('themes_io')
                .select('*')
                .eq('course_id', value)

            if (error) console.error(error.message)

            if (!error) {
                const theme_id = themes ? themes[0]?.id : undefined

                if (!theme_id) return console.error('Error')

                setData({ ...data, course_id: value, theme_id: theme_id })
                setCourseName(course_name)
            }
        } catch (error) {
            console.error(error)
        }
    }

    console.log(data)
    return (
        <>
            <Flex
                background="#fff"
                direction="column"
                padding="20px 25px"
                flex="1"
                borderTopRadius="5px"
            >

                <FormControl >
                    <FormLabel
                        id="lbl-title"
                        htmlFor="title"
                        fontWeight="700"
                        color="#8c8c8c"
                        fontSize="13px"
                        lineHeight="15px"
                    >
                        Curso
                    </FormLabel>

                    <Select
                        isDisabled={certificates?.length === 1 ? true : false}
                        id="title"
                        type="text"
                        placeholder="Para qual curso deseja emitir um certificado?"
                        marginBottom="15px"
                        value={certificates?.length === 1 ? certificates[0].course_id : data.course_id}
                        onChange={event => handleSelectCourse(event.target.value)}
                    >
                        {courses.data?.map((course, index) => (
                            <option key={index} value={course.id}>{course.title}</option>
                        ))}
                    </Select>

                    <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel
                        id="lbl-description"
                        htmlFor="description"
                        fontWeight="700"
                        color="#8c8c8c"
                        fontSize="13px"
                        lineHeight="15px"
                    >
                        Nome do aluno
                    </FormLabel>

                    <Input
                        id="nome_do"
                        type="text"
                        placeholder="Nome do aluno..."
                        marginBottom="15px"
                        defaultValue={certificates?.length === 1 ? certificates?.[0].name : ''}
                        onChange={event => setData({ ...data, name: event.target.value })}
                    />

                    <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel
                        id="lbl-course-url"
                        htmlFor="course_url"
                        fontWeight="700"
                        color="#8c8c8c"
                        fontSize="13px"
                        lineHeight="15px"
                    >
                        Email do aluno
                    </FormLabel>

                    <Input
                        id="course_url"
                        type="text"
                        placeholder="Email do aluno..."
                        marginBottom="15px"
                        defaultValue={certificates?.length === 1 ? certificates?.[0].email : ''}
                        onChange={event => setData({ ...data, email: event.target.value })}
                    />

                    <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel
                        id="lbl-workload"
                        htmlFor="workload"
                        fontWeight="700"
                        color="#8c8c8c"
                        fontSize="13px"
                        lineHeight="15px"
                    >
                        Data de emissão
                    </FormLabel>

                    <Input
                        isDisabled={certificates?.length === 1 ? true : false}
                        id="workload"
                        type="date"
                        marginBottom="15px"
                        defaultValue={data.created_at}
                        onChange={event => setData({ ...data, created_at: event.target.value })}
                    />

                    <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
                </FormControl>

            </Flex>

            {/* Menu bottom */}

            <Flex
                background="#fff"
                height="80px"
                align="center"
                justify="flex-end"
                borderTop="1px solid rgba(0,0,0,0.1)"
                padding="0 25px"
                borderBottomRadius="5px"
            >
                <Flex>
                    <Button

                        fontWeight="700"
                        fontSize="14px"
                        lineHeight="20px"
                        color="rgba(131, 131, 131, 0.7)"

                        background="transparent"



                        _hover={{
                            background: 'transparent',
                            color: "rgba(131, 131, 131, 0.9)"
                        }}

                        _focus={{
                            border: 'none'
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        fontWeight="700"
                        fontSize="14px"
                        lineHeight="20px"
                        color="#fff"

                        background="#BBC564"
                        borderRadius="4px"



                        _hover={{
                            background: `${theme.green700}`
                        }}

                        _focus={{
                            border: 'none'
                        }}

                        onClick={certificates?.length === 1 ? handlerUpdate : handlerSubmit}

                    >
                        {certificates?.length === 1 ? 'Salvar alterações' : 'Finalizar'}
                    </Button>
                </Flex>

            </Flex>
        </>
    )
}

export default CertificateDetails
