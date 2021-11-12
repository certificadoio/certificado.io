import { Flex } from '@chakra-ui/react'
import React from 'react'

const WrapperCourses: React.FC = ({ children }) => {
    return (
        <Flex
            maxWidth="1100px"
            padding="15px 25px"
            flexWrap="wrap"
            justifyContent={["center", "center", "space-between"]}
        >

            {children}
        </Flex>
    )
}

export default WrapperCourses
