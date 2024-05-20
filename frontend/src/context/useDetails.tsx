import { useState, createContext, useContext } from "react";
import { Detail } from "../interfaces";

interface PropsContext {
  detailsLength: number | null;
  onChangeDetailsLength: (numberResults:number) => void;
  details: Detail[] | null;
  onChangeDetails: (Details: Detail[]) => void;
}

export const DetailsContext = createContext<PropsContext>({
  detailsLength: null,
  onChangeDetailsLength: () => {},
  details: null,
  onChangeDetails: () => {},
});
  

export const DetailsProvider: React.FC<any> = ({ children }) =>{

  const [detailsLength, setDetailsLength] = useState<number|null>(null) 
  const [details, setDetails] = useState<Detail[]|null>(null) 

  const onChangeDetails = (details: Detail[]) => setDetails(details)
  const onChangeDetailsLength = (numberResults:number) => setDetailsLength(numberResults)

  return <DetailsContext.Provider value={{ details, onChangeDetails, detailsLength, onChangeDetailsLength}}>{children}</DetailsContext.Provider>
}


export const useDetailsContext = () => {   

  const Context = useContext(DetailsContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}