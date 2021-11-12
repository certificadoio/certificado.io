import { Flex } from '@chakra-ui/react'
import useNewCourse from '../../../store/useNewCourse'
import ProgressItem from './ProgressItem'

const ProgressBar: React.FC = () => {

    const newcourse = useNewCourse(state => state)

    return (
        <Flex
            background="#fff"
            height="80px"
            borderBottom="1px solid #f5f5f5"
        >

            <Flex
                maxWidth="1100px"
                mx="auto"
            >

                <ProgressItem
                    number={1}
                    label="Informações do curso"
                    isSelected={newcourse.progressCount === 0 ? true : false}
                />

                <ProgressItem
                    number={2}
                    label="Seleção de template"
                    isSelected={newcourse.progressCount === 1 ? true : false}
                />

                <ProgressItem
                    number={3}
                    label="Customização"
                    isSelected={newcourse.progressCount === 2 ? true : false}
                />

            </Flex>

        </Flex>
    )
}

export default ProgressBar