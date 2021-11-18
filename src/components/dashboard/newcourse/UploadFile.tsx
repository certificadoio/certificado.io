import { Flex, FormControl, Text, FormLabel, Image } from '@chakra-ui/react'
import React, { useState, useCallback } from 'react'
import useNewCourse from '../../../store/useNewCourse'
import { supabase } from '../../../utils/supabaseClient'
import { useDropzone } from 'react-dropzone'

interface IProps {
    id: string
}

const UploadFile: React.FC<IProps> = ({ id }) => {

    const state = useNewCourse(state => state)
    const [hasFile, setHasFile] = useState(false)

    const onDrop = useCallback(acceptedFiles => {
        setHasFile(!!acceptedFiles)
        console.log(id)
        if (id === 'Logo') {
            state.setThemeCertificate({ ...state.themeCertificate, logo: acceptedFiles })
        }

        if (id === 'Assinatura') {
            state.setThemeCertificate({ ...state.themeCertificate, signature: acceptedFiles })
        }

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // Estados para guardar a 'url' do avatar
    // e o estado de upload
    const [uploading, setUploading] = useState(false)

    // async function upload(event: React.ChangeEvent<HTMLInputElement>) {
    //     try {
    //         setUploading(true)
    //         if (!event.target.files || event.target.files.length === 0) {
    //             throw new Error('You must select an image to upload.')
    //         }
    //         const file = event.target.files[0]
    //         const fileExt = file.name.split('.').pop()
    //         const fileName = `${Math.random()}.${fileExt}`
    //         const filePath = `${fileName}`
    //         let { error: uploadError } = await supabase.storage
    //             .from('images')
    //             .upload(filePath, file)
    //         if (uploadError) {
    //             throw uploadError
    //         }
    //         onChange(filePath)
    //     } catch (error) {
    //         console.error(error)
    //     } finally {
    //         setUploading(false)
    //     }

    return (
        <FormControl
            id={id}
            {...getRootProps()}
            mb="5px"
        >
            <Text
                fontWeight="700"
                color="#8c8c8c"
                fontSize="13px"
                lineHeight="15px"
            >
                {id}
            </Text>

            <Text
                htmlFor="title"
                fontWeight="500"
                color="#8c8c8c66"
                fontSize="13px"
                lineHeight="15px"
                mt="5px"
            >
                Tamanho: 300x200 (PNG, SVG)
            </Text>

            <FormLabel
                width="100%"
                display="flex"
                cursor="pointer"
                height="165px"
                alignItems="center"
                justifyContent="center"
                border="1px dashed #d9d9d9"
                borderRadius="4px"
                mt="10px"
                direction="column"
            >
                <Image
                    src={`/assets/icons/${!hasFile ? 'upload' : uploading ? 'carregandofile' : 'deletefile'}.svg`}
                    alt="upload"
                    width="132px"
                    height="64px"
                />
            </FormLabel>

            <input
                {...getInputProps()}

            // disabled={uploading}
            />
        </FormControl>
    )
}

export default UploadFile
