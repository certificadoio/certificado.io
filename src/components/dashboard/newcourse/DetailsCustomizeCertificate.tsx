import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import useNewCourse from '../../../store/useNewCourse'
import UploadFile from './UploadFile'
import UploadLogoImg from './UploadLogoImage'

const DetailsCustomizeCertificate = () => {

    const state = useNewCourse(state => state)

    return (
        <Flex
            background="#fff"
            direction="column"
            padding="20px 25px"
            flex="1"
            borderTopRadius="5px"
            overflowX="hidden"
            maxHeight="508px"
        >

            <UploadLogoImg id="Logo" />

            <FormControl>
                <FormLabel
                    id="title"
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
                    placeholder="Título do certificado"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.title}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, title: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel
                    id="subtitle"
                    htmlFor="subtitle"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Subtítulo
                </FormLabel>

                <Input
                    id="subtitle"
                    type="text"
                    placeholder="Subtítulo"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.subtitle}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, subtitle: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel
                    id="graduatedIn"
                    htmlFor="graduatedIn"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Graduado em
                </FormLabel>

                <Input
                    id="graduatedIn"
                    type="text"
                    placeholder="Graduado em"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.graduated_in}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, graduated_in: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>

            <UploadFile
                id="Assinatura"
            />

            <FormControl>
                <FormLabel
                    id="footerSignature"
                    htmlFor="footerSignature"
                    fontWeight="700"
                    color="#8c8c8c"
                    fontSize="13px"
                    lineHeight="15px"
                >
                    Rodapé da assinatura
                </FormLabel>

                <Input
                    id="footerSignature"
                    type="text"
                    placeholder="Coordenador do curso"
                    marginBottom="15px"
                    defaultValue={state.themeCertificate.footer_signature}
                    onChange={event => state.setThemeCertificate({ ...state.themeCertificate, footer_signature: event.target.value })}
                />

                <FormErrorMessage mt="-12px" mb="12px"></FormErrorMessage>
            </FormControl>
        </Flex>
    )
}

export default DetailsCustomizeCertificate
