import { Thead, Tr, Th } from '@chakra-ui/react'

const TableHead = () => {
    return (
        <Thead background="#f9f9f9">
            <Tr>
                <Th>Aluno</Th>
                <Th>Curso</Th>
                <Th display={["none", "none", "table-cell"]}>Emissão</Th>
                <Th display={["none", "table-cell", "table-cell"]}>Ações</Th>
            </Tr>
        </Thead>
    )
}

export default TableHead
