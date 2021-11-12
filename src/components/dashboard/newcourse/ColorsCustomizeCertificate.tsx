import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import useNewCourse from '../../../store/useNewCourse'

const ColorsCustomizeCertificate = () => {

    const state = useNewCourse(state => state)

    return (
        <Flex
            background="#fff"
            direction="column"
            padding="20px 25px"
            flex="1"
            borderTopRadius="5px"
            minHeight="508px"
        >

            <FormControl >
                <FormLabel
                    id="primaryBackground"
                    htmlFor="primaryBackground"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Cor de fundo primária
                </FormLabel>

                <Input
                    id="primaryBackground"
                    type="color"
                    placeholder="Nome do curso"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.primary_bg_color}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, primary_bg_color: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

            <FormControl >
                <FormLabel
                    id="secondaryBackground"
                    htmlFor="secondaryBackground"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Cor de fundo secundária
                </FormLabel>

                <Input
                    id="secondaryBackground"
                    type="color"
                    placeholder="Nome do curso"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.secondary_bg_color}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, secondary_bg_color: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

            <FormControl >
                <FormLabel
                    id="primaryColor"
                    htmlFor="primaryColor"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Cor primária
                </FormLabel>

                <Input
                    id="primaryColor"
                    type="color"
                    placeholder="Nome do curso"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.primary_color}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, primary_color: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>


            <FormControl >
                <FormLabel
                    id="secondaryColor"
                    htmlFor="secondaryColor"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Cor secundária
                </FormLabel>

                <Input
                    id="secondaryColor"
                    type="color"
                    placeholder="Nome do curso"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.secondary_color}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, secondary_color: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

        </Flex>
    )
}

export default ColorsCustomizeCertificate
