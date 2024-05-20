import { Flex, Text } from "@chakra-ui/react"
import { useDetailsContext } from "../../context"

const Details = () => {

  const { details }  =  useDetailsContext()

  console.log('DETAILS: ', details)

  return (
    <Flex w='100%' minH='420px' h='max-content' bgColor='#294855'>
      {
        details 
        ? <Text>HAY DETAILS</Text>
        : <Text>NO HAY DETAILS</Text>
      }
    </Flex>
  )
}

export default Details