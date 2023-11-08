import { useRoutes, BrowserRouter} from 'react-router-dom'
import Home from "../Home";
import Developer from '../Developers';
import Merch from '../Merch';
import Navbar from '../../Components/Navbar';
import './index.css'
import NotFound from '../NotFound';


const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <NotFound/>},
        {path: '/shop', element: <Home/>},
        {path: '/developers', element: <Developer/>},
        {path: '/merchandise', element: <Merch />}
        
    ])
    return routes
    
}
    



const App = () => {
    return(
        <div className="a">
            <BrowserRouter>
                
                <Navbar />
                <AppRoutes />
                
                
            </BrowserRouter>
            
            
        </div>
        
    )

}

export default App

