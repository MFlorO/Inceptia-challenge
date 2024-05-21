import { Flex, Text } from "@chakra-ui/react"
import { useDetailsContext } from "../../context"
import TableDetails from "./tableDetails/TableDetails"

const Details = () => {

  const { details, detailsLength }  =  useDetailsContext()

  return (
    <Flex w='100%' minH='380px' h='max-content'>
      {
        details 
        ? details?.length > 0 
            ? <Flex w='100%' direction='column' gap={4}>
                <Flex color='white' alignItems='center' justifyContent='space-between' bgColor='#294855' gap={4} fontSize='12px'>
                  <Text>TODOS</Text>
                  <Text>TRANSFERIDOS</Text>
                  <Text>CLIENTE NO ENCONTRADO EN LA BD</Text>
                  <Text>LLAMANDO</Text>
                  <Text>CORTO CLIENTE</Text>
                  <Text>MAIL ENVIADO</Text>
                  <Text>INDEFINIDO</Text>
                  <Text>NO ENCONTRADO EN LA BD</Text>
                </Flex>
                { detailsLength && <Flex color='white' justifyContent='end' alignItems='center' fontSize='15px'>{detailsLength} resultados</Flex> }
                { details?.length > 0 && <TableDetails details={details} />}
              </Flex>
            : <Text w='100%' color='white' textAlign='center'>NO HAY RESULTADOS EN ESE RANGO DE FECHAS</Text>
        : <Text w='100%' color='white' textAlign='center'>SELECCIONE UN RANGO DE FECHAS PARA VER MÁS INFORMACIÓN</Text>
      }
    </Flex>
  )
}

export default Details