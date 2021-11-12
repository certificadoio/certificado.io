import { Flex, FormControl, Text, FormLabel, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import useNewCourse from '../../../store/useNewCourse'
import { supabase } from '../../../utils/supabaseClient'

interface IProps {
    id: string,
    onChange: (file: string) => void,
    hasFile: string
}

const UploadFile: React.FC<IProps> = ({ onChange, id, hasFile }) => {

    const state = useNewCourse(state => state)

    // Estados para guardar a 'url' do avatar
    // e o estado de upload
    const [uploading, setUploading] = useState(false)

    async function upload(event: React.ChangeEvent<HTMLInputElement>) {
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            let { error: uploadError } = await supabase.storage
                .from('images')
                .upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }

            onChange(filePath)
        } catch (error) {
            console.error(error)
        } finally {
            setUploading(false)
        }
    }

    return (
        <FormControl mb="5px">
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

            <input
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                }}
                type="file"
                id={id}
                accept="image/*"
                onChange={upload}
            // disabled={uploading}
            />
        </FormControl>
    )
}

export default UploadFile
