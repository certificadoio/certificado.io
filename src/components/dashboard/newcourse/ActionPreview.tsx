import { Flex, Button, } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../../../styles/theme'

const ActionPreview = () => {
    return (
        <Flex
            width="100%"
            height="45px"
            borderBottom="1px solid #f5f5f5"
            align="center"
            justify="flex-end"
            px="24px"
        >

            <Button
                variant="outline"
                color="#8c8c8c"
                height="26px"
                fontSize="13px"
            >
                Preview
            </Button>

        </Flex>
    )
}

export default ActionPreview
