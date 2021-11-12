import { Flex, Text, } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'
import { theme } from '../../../styles/theme'

interface IProps {
    state: {
        designSelected: boolean,
        setDesignSelected: Dispatch<SetStateAction<boolean>>
    }
}

const ActionsCustomizeCertificate: React.FC<IProps> = ({ state }) => {

    return (
        <Flex
            width="100%"
            height="45px"
            borderBottom="1px solid #f5f5f5"
        >
            <Text
                display="grid"
                placeItems="center"
                width="50%"
                fontSize="14px"

                fontWeight={state.designSelected ? '400' : '600'}
                lineHeight="21px"
                color={state.designSelected ? '#000' : theme.blue500}
                borderBottom={state.designSelected ? '' : `2px solid ${theme.blue500}`}

                cursor="pointer"

                onClick={
                    () => {
                        state.designSelected ? state.setDesignSelected(!state.designSelected) : () => { }
                    }
                }
            >
                Conteúdo
            </Text>
            <Text
                display="grid"
                placeItems="center"
                width="50%"
                fontSize="14px"

                fontWeight={!state.designSelected ? '400' : '600'}
                lineHeight='14px'
                color={!state.designSelected ? '#000' : theme.blue500}
                borderBottom={!state.designSelected ? '' : `2px solid ${theme.blue500}`}

                cursor="pointer"

                onClick={
                    () => {
                        !state.designSelected ? state.setDesignSelected(!state.designSelected) : () => { }
                    }
                }
            >
                Design
            </Text>
        </Flex>
    )
}

export default ActionsCustomizeCertificate
