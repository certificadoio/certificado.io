import { Flex, FormControl, Text, FormLabel, Image, Input } from '@chakra-ui/react'
import React, { useState, useCallback } from 'react'
import useNewCourse from '../../../store/useNewCourse'
import { supabase } from '../../../utils/supabaseClient'
import { useDropzone } from 'react-dropzone'

interface IProps {
    id: string
}

const UploadLogoImg: React.FC<IProps> = ({ id }) => {

    const state = useNewCourse(state => state)
    const [hasFile, setHasFile] = useState(false)
    const [uploading, setUploading] = useState(false)

    function blobToDataURL(blob: Blob, callback: (data: any) => void) {
        var a = new FileReader();
        a.onload = function (e: any) { callback(e.target.result); }
        a.readAsDataURL(blob);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files?.length) return

        setHasFile(true)
        state.setLogoBlob(files[0])
    }
    // console.log(state)
    return (
        <FormControl
            id={id}
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
                htmlFor={id}
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

            <Input id={id} type="file" display="none" onChange={onChange} />
        </FormControl>
    )
}

export default UploadLogoImg
