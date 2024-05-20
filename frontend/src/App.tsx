import { useEffect } from "react"
import { Details, RangeDateFilter, SearchInput, SideBar } from "./components"
import { getToken } from "./api/functions"
import { Flex, Text } from "@chakra-ui/react"
import { useClientContext } from "./context"

const App: React.FC = () => {

  const { clientId }  =  useClientContext()

  useEffect(() => {

    const fetchData = async () => {

      const { status, error } = await getToken();

      if (status) {
        console.log('FetchData successful');
      } else {
        console.error('Error in fetchData:', error);
      }
    };

    fetchData();
    
  }, [])

  return (
    <Flex w='100%' minH='100vh' direction={{base:'column', sm:'row'}} bgColor='#002735'>

      <SideBar />

      <Flex w='100%' minH='100vh' direction='column' p='4%' gap={8}>
      {
        clientId 
          ? <>
            <SearchInput />

            <Flex w='100%' h='max-content' direction='column' gap={8}>
              <Flex w='100%' color='white' alignItems='center' justifyContent='space-between'>
                <Flex>
                  <Text>Detalle</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between' gap={4}>
                  <Text>AÑO</Text>
                  <Text>MES</Text>
                  <Text>SEMANA</Text>
                  <RangeDateFilter /> 
                </Flex>
              </Flex>

              <Details />
            </Flex>
            </>
          : <Text textAlign='center' mt='5rem' color='white'>SELECCIONE UN CLIENTE PARA VER MAS INFORMACION </Text>
      }
      </Flex>

    </Flex>  
  )
}

export default App