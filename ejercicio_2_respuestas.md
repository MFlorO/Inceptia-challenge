

2.1- ¿Cómo implementarías las acciones del frontend utilizando redux? (por ejemplo autenticación, solicitud de clientes activos para el usuario y solicitud de casos por cliente)

En este caso utilice context porque es una app de tamaño reducida pero para una app con mayor funcionalidades o más complejas como las nombradas aplicaria redux toolkit. 
Crearia un store y cada slice de acuerdo a la funcionalidad que quiera desarrollar. Por ejemplo sliceAuth o sliceClients demás. Y desarrollaría los thunk en cada uno, ya que serían llamadas asíncronicas. 

2.2- Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?

Utilizaria React Router. 

- El index tendria el provider de Router .
- En app.tsx tendria cada ruta. 
- Crearia una carpeta pages donde irían todas las rutas.

Por ejemplo:

<!-- import { Home, Auth } from "./pages"; -->

<!-- <Routes>
    <Route path="/" element=<Auth />} />
    <Route path="/Home" element=<Home />} />
</Routes> -->