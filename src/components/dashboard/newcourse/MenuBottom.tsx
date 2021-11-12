import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { theme } from '../../../styles/theme'

import useNewCourse from '../../../store/useNewCourse'
import { checkCourseDetails, checkThemeCertificate } from '../../../utils/checkInputs'

import { supabase } from '../../../utils/supabaseClient'
import useGlobal from '../../../store/useGlobal'

const MenuBottom = () => {

    const [loading, setLoading] = useState(false)

    const state = useNewCourse(state => state)
    const global = useGlobal(state => state)

    const handlerAddProgress = async () => {

        if (state.progressCount === 0) {
            // Está na etapa 01
            let response = checkCourseDetails(state.courseDetails)
            if (response.length !== 0) return state.setErrors(response)

            state.setErrors([])

            return state.addProgressCount()
        }

        if (state.progressCount === 1) {
            return state.addProgressCount()
        }

        if (state.progressCount === 2) {
            let response = checkThemeCertificate(state.themeCertificate)
            if (response.length !== 0) return state.setErrors(response)

            state.setErrors([])
            state.editMode ? updateCourse() : insertCourse()
        }
    }

    interface Course {
        id: string
        title: string
        description: string
        url_course: string
        workload: number
        skills: string
        updated_at: string
        created_at: string
        owner_id: string | undefined
    }

    interface Theme {
        id: string
        course_id: string
        certificate_model: string,
        logo: string,
        title: string,
        subtitle: string,
        graduated_in: string,
        signature: string,
        footer_signature: string,
        primary_color: string,
        secondary_color: string,
        primary_bg_color: string,
        secondary_bg_color: string
    }


    const insertCourse = async () => {
        // Função responsável por adicionar o curso
        setLoading(true)

        // Criar o curso, pegar o id do curso e criar o tema com o id do curso
        const { data, error } = await supabase
            .from<Course>('courses_io')
            .insert(state.courseDetails)

        if (error) {
            setLoading(false)
            return console.error(error.message)
        }

        let id = null

        data?.map(each => {
            if (each.id.length !== 0) {
                return id = each.id
            }
        })

        if (id == null) {
            setLoading(false)
            return console.error('Course doesn\'t created')
        }

        const response = await supabase
            .from<Theme>('themes_io')
            .insert({
                course_id: id,
                ...state.themeCertificate
            })

        if (response.error) {
            setLoading(false)
            return console.error(response.error.message)
        }

        if (response.data[0].id.length !== 0) {
            global.toggleModalCreated()
        }

        setLoading(false)
        state.resetData()
    }

    const updateCourse = async () => {
        setLoading(true)

        const { data, error } = await supabase
            .from('courses_io')
            .update(state.courseDetails)
            .eq('id', state.idToAction)

        if (error) {
            setLoading(false)
            return console.error(error.message)
        }

        let id = null

        data?.map(each => {
            if (each.id.length !== 0) {
                return id = each.id
            }
        })

        if (id == null) {
            setLoading(false)
            return console.error('Course doesn\'t created')
        }

        const response = await supabase
            .from('themes_io')
            .update(state.themeCertificate)
            .eq('course_id', state.idToAction)

        if (response.error) {
            setLoading(false)
            return console.error(response.error.message)
        }

        let id2 = null

        data?.map(each => {
            if (each.id.length !== 0) {
                return id2 = each.id
            }
        })

        if (id2 == null) {
            setLoading(false)
            return console.error('Course doesn\'t created')
        }

        if (response.data[0].id.length !== 0) {
            global.toggleModalCreated()
        }

        setLoading(false)
    }

    return (
        <Flex
            background="#fff"
            height="80px"
            align="center"
            justify="space-between"
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
                    border="1px solid rgba(53, 53, 53, 0.3)"
                    borderRadius="4px"


                    _hover={{
                        background: 'transparent',
                        color: "rgba(131, 131, 131, 0.9)",
                        border: "1px solid rgba(53, 53, 53, 0.6)"
                    }}

                    _focus={{
                        border: "1px solid rgba(53, 53, 53, 0.3)"
                    }}
                >
                    Cancelar
                </Button>
            </Flex>

            <Flex>
                <Button

                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="20px"
                    color="rgba(131, 131, 131, 0.7)"

                    background="transparent"

                    onClick={
                        state.progressCount === 1 || state.progressCount === 2
                            ? state.rmvProgressCount
                            : () => { }
                    }

                    _hover={{
                        background: 'transparent',
                        color: "rgba(131, 131, 131, 0.9)"
                    }}

                    _focus={{
                        border: 'none'
                    }}
                >
                    Voltar
                </Button>
                <Button
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#fff"

                    background="#BBC564"
                    borderRadius="4px"

                    onClick={handlerAddProgress}

                    _hover={{
                        background: `${theme.green700}`
                    }}

                    _focus={{
                        border: 'none'
                    }}

                    isLoading={loading}

                >
                    {state.progressCount === 2 ? state.editMode ? 'Salvar Alterações' : 'Finalizar' : 'Prosseguir'}
                </Button>
            </Flex>

        </Flex>
    )
}

export default MenuBottom
