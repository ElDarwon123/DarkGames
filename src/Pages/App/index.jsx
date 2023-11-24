//  importing react into App
import React from 'react';
//  importing useRoutes and BrowserRouter for create routes
import { useRoutes, BrowserRouter} from 'react-router-dom'
//  CartContextProvider import
import { CartContextProvider } from '../../Components/Context';
//  importing Home into App
import Home from "../Home";
//  importing Developer's component into App's component
import Developer from '../Developers';
//  importing Games's component into App's component
import Games from '../Games';
//  importing Footer's component into App's component
import Footer from '../../Components/Footer';
//  importing MerchProduct's component into App's component
import Merch from '../Merch';
//  importing About's component into App's component
import About from '../About';
//  importing Navbar's component into App's component
import Navbar from '../../Components/Navbar';
//  importing App's style sheet
import './index.css'
//  importing NotFound's component into App's component
import NotFound from '../NotFound';

//  define AppRoutes for create routes
const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <NotFound/>},
        {path: '/shop', element: <Home/>},
        {path: '/developers', element: <Developer/>},
        {path: '/merchandise', element: <Merch />},
        {path: '/games', element: <Games/>},
        {path: '/about', element: <About/>}
        
    ])
    return routes
    
}
    


//  define the App component 
const App = () => {
    //  render the App component
    return(
        <div className="a">
            <CartContextProvider>
                <BrowserRouter>
                    
                    <Navbar />
                    <AppRoutes />
                    <Footer className='footer'/>
                </BrowserRouter>
            </CartContextProvider>
            
            
            
        </div>
        
    )

}

//  exporting App as deafault
export default App

