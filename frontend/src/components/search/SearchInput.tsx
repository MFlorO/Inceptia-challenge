import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <Flex w='100%' alignItems='center'>
      <InputGroup>
        <Input w='100%' placeholder='ID caso, ID cliente, Tel' _focus={{borderColor:'#7FE8C6'}} _hover={{borderColor:'#7FE8C6'}} />
        <InputRightElement><IoSearchSharp size='20px' color='#7FE8C6' cursor='pointer' /></InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default SearchInput