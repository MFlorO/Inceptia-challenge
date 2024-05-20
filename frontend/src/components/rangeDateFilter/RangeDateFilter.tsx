import { useEffect, useState } from "react";
import { Flex, Input } from "@chakra-ui/react"
import { getCasesByDate } from "../../api/functions";
import { useClientContext, useDetailsContext } from "../../context";

const RangeDateFilter = () => {

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const { clientId }  =  useClientContext()
  const { onChangeDetails }  =  useDetailsContext()

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('not have token');
        return;
      }
  
      if (!clientId) {
        console.log('not have clientId');
        return;
      }
  
      if (startDate || endDate) {
        const response = await getCasesByDate({ botID: clientId, initialDate: startDate, finalDate: endDate });
        if (response?.status) {
          console.log('FetchData successful', response?.data);
          onChangeDetails(response?.data?.results)
        } else {
          console.error('Error in fetchData:', response?.error);
        }
      }
    };
  
    fetchData();
  }, [startDate, endDate, clientId, onChangeDetails]);


  return (
    <Flex w='100%' color='white'>
      <Input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} _focus={{borderColor:'#7FE8C6'}} _hover={{borderColor:'#7FE8C6'}}/>
      <Input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} _focus={{borderColor:'#7FE8C6'}} _hover={{borderColor:'#7FE8C6'}}/>
    </Flex>
  )
}

export default RangeDateFilter