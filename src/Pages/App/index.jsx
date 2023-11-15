import React from 'react';
import { useRoutes, BrowserRouter} from 'react-router-dom'
import { CartContextProvider } from '../../Components/Context';
import Home from "../Home";
import Developer from '../Developers';
import Merch from '../Merch';
import About from '../About';
import Navbar from '../../Components/Navbar';
import './index.css'
import NotFound from '../NotFound';


const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <NotFound/>},
        {path: '/shop', element: <Home/>},
        {path: '/developers', element: <Developer/>},
        {path: '/merchandise', element: <Merch />},
        {path: '/about', element: <About/>}
        
    ])
    return routes
    
}
    



const App = () => {
    return(
        <div className="a">
            <CartContextProvider>
                <BrowserRouter>
                    
                    <Navbar />
                    <AppRoutes />

                </BrowserRouter>
            </CartContextProvider>
            
            
            
        </div>
        
    )

}

export default App

