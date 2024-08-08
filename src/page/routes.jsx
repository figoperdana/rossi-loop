import { createBrowserRouter } from "react-router-dom";

import Novelpage from "./Novelpage";
    
import Sinopsis from './Sinopsis'

    
export const router = createBrowserRouter([

    {
        path: "/",
        element: <Novelpage/>
    },
    {
        path: "/Sinopsis",
        element: <Sinopsis/>,
    }

])
    

