import { Flex, Text } from "@chakra-ui/react"
import { useDetailsContext } from "../../context"
import TableDetails from "./tableDetails/TableDetails"

const Details = () => {

  const { details, detailsLength }  =  useDetailsContext()

  return (
    <Flex w='100%' minH='380px' h='max-content'>
      {
        details 
        ? <Flex w='100%' direction='column' gap={4}>
            <Flex color='white' alignItems='center' bgColor='#294855' gap={4} fontSize='12px'>
              <Text>TODOS</Text>
              <Text>TRANSFERIDOS</Text>
              <Text>CLIENTE NO ENCONTRADO EN LA BD</Text>
              <Text>LLAMANDO</Text>
              <Text>CORTO CLIENTE</Text>
              <Text>MAIL ENVIADO</Text>
              <Text>INDEFINIDO</Text>
              <Text>NO ENCONTRADO EN LA BD</Text>
            </Flex>
            { detailsLength && 
              <Flex color='white' justifyContent='end' alignItems='center' fontSize='15px'>
                {detailsLength} resultados
              </Flex>
            }
            <TableDetails details={details} />
          </Flex>
        : <Text color='white' textAlign='center'>NO HAY RESULTADOS EN ESE RANGO DE FECHAS</Text>
      }
    </Flex>
  )
}

export default Details