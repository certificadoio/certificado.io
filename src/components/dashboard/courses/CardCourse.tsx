import { Box, Flex, Text, Image } from '@chakra-ui/react'
import useGlobal from '../../../store/useGlobal'

import { theme } from '../../../styles/theme'

interface Course {
    id?: string
    title: string
    description: string
    url_course: string
    workload: number
    skills: string
    updated_at?: string
    created_at?: string
    owner_id: string | undefined,
    company_name: string,
}

interface IProps {
    course: Course
}

const CardCourse: React.FC<IProps> = ({ course }) => {

    const global = useGlobal(state => state)

    let created = Date.parse(course.created_at || '')
    let created_at = new Date(created)

    return (
        <Box
            mb={["25px", "35px"]}
        >
            <Flex
                width="330px"
                height="280px"
                background="#fff"
                borderTopRadius="4px"

                padding="30px"
                direction="column"
            >
                <Text
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight="30px"
                    marginBottom="20px"
                >
                    {course.title}
                </Text>

                <Flex
                    align="center"
                >
                    <Image
                        src="/assets/icons/certificate.svg"
                        alt="certificate"
                        width=""
                    />

                    <Text
                        fontWeight="500"
                        fontSize="14px"
                        lineHeight="21px"
                        color="#8c8c8c"
                        marginLeft="10px"
                    >
                        Pronto para emitir
                    </Text>
                </Flex>

                <Flex
                    marginTop="10px"
                    align="center"
                >
                    <Image
                        src="/assets/icons/calendar.svg"
                        alt="certificate"
                        width=""
                    />

                    <Text
                        fontWeight="500"
                        fontSize="14px"
                        lineHeight="21px"
                        color="#8c8c8c"
                        marginLeft="10px"
                    >
                        Criado em {created_at.toLocaleDateString()}
                    </Text>
                </Flex>

                <Flex
                    marginTop="40px"
                >

                    {course.skills?.split(',').map((skill, index) => {
                        if (index >= 3) return

                        return (
                            <Text
                                key={index}
                                fontWeight="500"
                                fontSize="12px"
                                lineHeight="18px"
                                color={theme.green500}
                                background={theme.green100}
                                padding="3px 13px"
                                borderRadius="500px"
                                marginRight="3px"
                            >
                                {skill.trim()}
                            </Text>
                        )
                    })}

                </Flex>
            </Flex>

            {/* Card course bottom */}

            <Flex
                width="100%"
                maxWidth="350px"
                background="#fff"
                borderBottomRadius="4px"

                borderTop="1px solid rgba(0, 0, 0, 0.08)"

                padding="30px"

                justify="space-between"
            >
                <Box
                    cursor="pointer"
                    onClick={() => global.toggleModalViewDetailsCourse(course)}
                >
                    <Image src="/assets/icons/edit.svg" alt="edit" width="20px" />
                </Box>


                <Image src="/assets/icons/certificate-gray.svg" alt="edit" width="20px" />


                <Box
                    cursor="pointer"
                    onClick={() => global.toggleModalDelete(course.id)}
                >
                    <Image src="/assets/icons/trash.svg" alt="edit" width="20px" />
                </Box>

            </Flex>
        </Box>
    )
}

export default CardCourse
