import { Flex, Input } from "@chakra-ui/react"
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <Flex w='100%' alignItems='center'>
        <Input w='100%' placeholder='ID caso, ID cliente, Tel' _focus={{borderColor:'#7FE8C6'}} _hover={{borderColor:'#7FE8C6'}} />
        <Flex position="relative" left='-2rem'>
            <IoSearchSharp size='20px' color='#7FE8C6' />
        </Flex>
    </Flex>
  )
}

export default SearchInput