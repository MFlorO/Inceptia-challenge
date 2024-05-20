import 'react-app-polyfill/ie11';
import * as serviceWorker from './serviceWorker';
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { ColorModeScript } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import App from './App';
import { ClientProvider, DetailsProvider } from './context';


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <ClientProvider>
      <DetailsProvider>
        <App />
      </DetailsProvider>
      </ClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)

serviceWorker.unregister();




