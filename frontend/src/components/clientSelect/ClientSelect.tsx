import { Flex, Text } from "@chakra-ui/react"
import { Client } from './../../interfaces/clients';
import { useClientContext } from "../../context";

interface Props {
  clients: Client[] | null
}

const ClientSelect = ({ clients }:Props) => {
  
  const { clientId, onChangeClientId }  =  useClientContext()

  const onHandleClick = (id:number) => onChangeClientId(id)

  return clients && 
  <Flex w='100%' h='100%' direction='column' mt='20px' pl='10px'>
    {
      clients?.map( client => (
        <Flex p='4%' key={client?.id} cursor='pointer' bgColor={clientId === client?.id ? '#002735' : 'none'} borderRadius={clientId === client?.id ? '30px 00px 0px 30px' : '0px'}
        onClick={() => onHandleClick(client?.id)}
        >
          <Text pl='15px' color='white'>
            {client?.name}
          </Text>
        </Flex>
      ))
    }
  </Flex>
}

export default ClientSelect