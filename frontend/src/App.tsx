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
    <Flex w='100%' minH='100vh' direction={{base:'column', sm:'row'}} bgColor='#002735' overflow="hidden">

      <SideBar />

      <Flex w='100%' minH='100vh' direction='column' p='3%' gap={8}>
      {
        clientId 
        ? <>
            <SearchInput />

            <Flex w='100%' h='max-content' direction='column' gap={8}>
              <Flex w='100%' color='white' alignItems='center' justifyContent='space-between' direction={{base:'column', md:'row'}} gap={{base:5, md:0}}>
                <Flex order={{base:'2', md:'1'}}>
                  <Text>Detalle</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='space-between' gap={4} direction={{base:'column', md:'row'}} order={{base:'1', md:'2'}}>
                  <Flex gap={4}>
                    <Text>AÑO</Text>
                    <Text>MES</Text>
                    <Text>SEMANA</Text>
                  </Flex>
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