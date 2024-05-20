import { useState, createContext, useContext } from "react";
import { Detail } from "../interfaces";

interface PropsContext {
  details: Detail[] | null;
  onChangeDetails: (Details: Detail[]) => void;
}

export const DetailsContext = createContext<PropsContext>({
  details: null,
  onChangeDetails: () => {},
});
  

export const DetailsProvider: React.FC<any> = ({ children }) =>{

  const [details, setDetails] = useState<Detail[]|null>(null) 

  const onChangeDetails = (details: Detail[]) => setDetails(details)

  return <DetailsContext.Provider value={{ details, onChangeDetails }}>{children}</DetailsContext.Provider>
}


export const useDetailsContext = () => {   

  const Context = useContext(DetailsContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}