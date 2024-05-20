import { Table, TableContainer, Thead, Tr, Th, Td,Tbody } from "@chakra-ui/react"
import { Detail } from "../../../interfaces"

interface Props {
    details: Detail[]
}

const TableDetails = ({ details }:Props) => {

  return (
    <TableContainer maxH='380px' overflowY="auto" bgColor='#294855'>
    <Table>

        <Thead>
            <Tr w='100%'>
                <Th color='#7FE8C6'>Gestionado</Th>
                <Th color='#7FE8C6'>ID Caso</Th>
                <Th color='#7FE8C6'>Telefono</Th>
                <Th color='#7FE8C6'>Llamada</Th>
                <Th color='#7FE8C6' textAlign='center'>Estado</Th>
            </Tr>
        </Thead>

        <Tbody w='100%' h='max-content'>
            {
                details?.map( ({ id, last_updated, case_uuid, phone, case_duration, case_result }) => (
                    <Tr color='white' key={id}>
                        <Td>{last_updated}</Td>
                        <Td>{case_uuid}</Td>
                        <Td>{phone}</Td>
                        <Td>{case_duration}</Td>
                        <Td textAlign='center'>{case_result?.name}</Td>
                    </Tr>
                ))
            }
        </Tbody>
    </Table>
    </TableContainer>
  )
}

export default TableDetails