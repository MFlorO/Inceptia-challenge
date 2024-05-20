import inceptiaApi from "../inceptiaApi";


export const getClients = async () => {
  try {

    const response = await inceptiaApi.get('/clients/');

    if (!response) throw new Error(`HTTP - error: ${response}`);

    const { data } = response;

    return { status: true, data };
    
  } catch (e) {
    console.error('Error in getClients: ', e);
    return { status: false, error: e };
  }
};