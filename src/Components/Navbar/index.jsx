import { NavLink } from "react-router-dom"
import './style.css'

const Navbar = () => {

    

    return(
        <nav className="navNav ">
            <ul className="ulNav"> 
                <li className="liNav">
                    <NavLink to="/home" >
                    <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" 
                    width='176px' height='44px' alt="" />
                    </NavLink>
                    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/shop' className='NavLink'>
                    Shop
                    </NavLink>    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/merchandise' className='NavLink Merch'>
                    Merch
                    </NavLink>    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/developers' className='NavLink'>
                    Developers
                    </NavLink>    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/' className='NavLink'>
                    Not found
                    </NavLink>    
                </li>
                
            </ul>
        </nav>

        
    )
}

export default Navbar