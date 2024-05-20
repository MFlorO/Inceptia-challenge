import { useState, createContext, useContext } from "react";


interface PropsContext {
  clientId: number | null;
  onChangeClientId: (id: number) => void;
}

export const ClientContext = createContext<PropsContext>({
  clientId: null,
  onChangeClientId: (id: number) => {},
});
  

export const ClientProvider: React.FC<any> = ({ children }) =>{

  const [clientId, setClientId] = useState<number|null>(null) 

  const onChangeClientId = (id:number) => setClientId(id)

  return <ClientContext.Provider value={{ clientId, onChangeClientId }}>{children}</ClientContext.Provider>
}


export const useClientContext = () => {   

  const Context = useContext(ClientContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}