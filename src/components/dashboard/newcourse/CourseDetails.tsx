import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import useNewCourse from '../../../store/useNewCourse'
import { supabase } from '../../../utils/supabaseClient'

const CourseDetails: React.FC = () => {

    const state = useNewCourse(state => state)
    const user = supabase.auth.user()

    useEffect(() => {
        const id = user?.id || undefined
        state.setCourseDetails({ ...state.courseDetails, owner_id: id })
        state.setThemeCertificate({ ...state.themeCertificate, owner_id: id })
    }, [])

    return (
        <Flex
            background="#fff"
            direction="column"
            padding="20px 25px"
            flex="1"
            borderTopRadius="5px"
        >

            <Box>
                {state.errors.map((erro, index) => (
                    <Text
                        key={index}
                        padding="5px"
                        background="#EE9494"
                        borderRadius="4px"
                        marginY="2px"
                    >
                        {erro}
                    </Text>
                ))}
            </Box>

            <FormControl>
                <FormLabel
                    mt="10px"
                    id="lbl-title"
                    htmlFor="title"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Título
                </FormLabel>

                <Input
                    id="title"
                    type="text"
                    placeholder="Nome do curso"
                    marginBottom="15px"
                    defaultValue={state.courseDetails.title}
                    onChange={event => state.setCourseDetails({ ...state.courseDetails, title: event.target.value })}
                />

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
                    Descrição
                </FormLabel>

                <Textarea
                    id="description"
                    placeholder="Descreva o curso"
                    marginBottom="15px"
                    defaultValue={state.courseDetails.description}
                    onChange={event => state.setCourseDetails({ ...state.courseDetails, description: event.target.value })}
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
                    Url do curso
                </FormLabel>

                <Input
                    id="course_url"
                    type="text"
                    placeholder="http://"
                    marginBottom="15px"
                    defaultValue={state.courseDetails.url_course}
                    onChange={event => state.setCourseDetails({ ...state.courseDetails, url_course: event.target.value })}
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
                    Carga horária
                </FormLabel>

                <Input
                    id="workload"
                    type="number"
                    placeholder="Duração do curso em horas"
                    marginBottom="15px"
                    defaultValue={state.courseDetails.workload}
                    onChange={event => state.setCourseDetails({ ...state.courseDetails, workload: Number(event.target.value) })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel
                    id="lbl-skills"
                    htmlFor="skills"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Habilidades (Separado por vírgula)
                </FormLabel>

                <Input
                    id="skills"
                    type="text"
                    placeholder="React, Node.js"
                    marginBottom="15px"
                    defaultValue={state.courseDetails.skills}
                    onChange={event => state.setCourseDetails({ ...state.courseDetails, skills: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>
        </Flex>
    )
}

export default CourseDetails
