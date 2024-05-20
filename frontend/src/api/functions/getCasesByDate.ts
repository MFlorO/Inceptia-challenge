import inceptiaApi from "../inceptiaApi";

interface Arguments {
  botID: Number,
  initialDate?: String | null,
  finalDate?: String | null
}

export const getCasesByDate = async ({ botID, initialDate, finalDate }:Arguments) => {
  
  try {

    if(!botID) return

    const response = await inceptiaApi.get(`/inbound-case/?bot=${botID}&local_updated__date__gte=${initialDate}&local_updated__date__lte=${finalDate}`);

    if (!response) throw new Error(`HTTP - error: ${response}`);

    const { data } = response;

    return { status: true, data, error: undefined };
    
  } catch (error) {
    console.error('Error in getCasesByDate: ', error);
    return { status: false, error, data: undefined };
  }
};