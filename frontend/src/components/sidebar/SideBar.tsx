import { useEffect, useState } from "react";
import { Flex, Text, useDisclosure, useBreakpointValue } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ClientSelect } from "../clientSelect";
import { getClients } from "../../api/functions";
import { Client } from './../../interfaces/clients';


const SideBar = () => {

  // const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: "md"});

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const [clients, setClients] = useState<null | Client[]>(null)

  const token = localStorage.getItem('token');

  useEffect(() => {

    const fetchData = async () => {

      if(!token) {
        console.log('not have token')
        return
      }

      const { status, error, data } = await getClients();

      if (status) {
        setClients(data)
        console.log('FetchData successful');
      } else {
        console.error('Error in fetchData:', error);
      }
    };

    fetchData();
    
  }, [token])

  return (
    <Flex w={isOpen ? '280px' : '20px'} h={{base:'50px', sm:'100vh'}}>
      
      {/* SLIDER MOBILE */}
      <Flex w='100vw' display={{base:'flex', sm:'none'}} alignItems='center' p='1%' gap={2}>
        <GiHamburgerMenu cursor='pointer' onClick={onToggle} color='#7FE8C6'/>
        <Text color='#7FE8C6' textAlign='center'>CHALLENGER INCEPTIA</Text>
      </Flex>

      <Flex display={{base:'flex', sm:'none'}} top={10} position="absolute" bgColor='#294855' overflow="auto" width={isOpen ? "200px" : "0"} h='98vh' transition="width 0.3s ease-in-out" zIndex={999}>
        <Flex w='100%' direction='column' display={isOpen ? "flex" : "none"} gap={4}>
          <Flex w='100%' justifyContent='center' alignItems='center' pt='1rem' color='#7FE8C6' textAlign='center'>CLIENTES</Flex>
          <ClientSelect clients={clients}/>
        </Flex>
      </Flex>

      {/* SLIDER DESKTOP */}
      <Flex display={{base:'none', sm:'flex'}} position="relative" bgColor='#294855' overflow="auto" width={isOpen ? "100%" : "0"} h='100vh' transition="width 0.3s ease-in-out" zIndex={999}>
        <Flex w='100%' direction='column' display={isOpen ? "flex" : "none"} gap={4}>
            <Flex w='100%' h='45px' direction='column' alignItems='center' justifyContent='center' borderBottom='1px solid #fff'>
              {/* <Flex bgImage='/public/logo_inceptia.png' bgRepeat='no-repeat' bgSize='contain' /> */}
              <Text color='#7FE8C6' textAlign='center'>CHALLENGER INCEPTIA</Text>
            </Flex>        
            <Flex w='100%' justifyContent='center' alignItems='center' bgColor='#002735' color='white' textAlign='center'>CLIENTES</Flex>
            <ClientSelect clients={clients}/>
        </Flex>
      </Flex>

      <Flex alignItems='center' display={{base:'none', sm:'flex'}}>
      {
        isOpen 
        ? <IoIosArrowBack cursor='pointer' onClick={onToggle} color='#7FE8C6' />
        : <IoIosArrowForward cursor='pointer' onClick={onToggle} color='#7FE8C6' />
      }
      </Flex>

    </Flex>
  )
}

export default SideBar