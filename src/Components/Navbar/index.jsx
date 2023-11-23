//    importing Navkinl     
import { NavLink } from "react-router-dom"
//  importing the component's style sheet
import './style.css'
//  creating the navigation's component as Navbar
const Navbar = () => {
    return(
        <nav className="navNav ">
            <ul className="ulNav"> 
                <li className="liNav">
                    <NavLink to="/shop" className='NavLink' >
                    <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" 
                    width='176px' height='44px' alt="" />
                    </NavLink>
                    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/shop' className='NavLink'>
                    SHOP
                    </NavLink>    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/merchandise' className='NavLink Merch'>
                    MERCH
                    </NavLink>    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/developers' className='NavLink'>
                    DEVELOPERS
                    </NavLink>    
                </li>
                <li 
                className="liNav">
                    <NavLink to='/about' className='NavLink'>
                    ABOUT
                    </NavLink>    
                </li>
                <li className="globalin">
                    <a href="https://store.steampowered.com/" className="accessUser">
                        <p className="SpInstalar">
                                Instalar Dark
                        </p>
                    </a>
                    <div className="starts">
                        <a href="" className="Login">Log in</a>
                        |
                        <a href="" className="Signin">Sign In</a>
                    </div>
                    

                </li>
            </ul>
        </nav>

        
    )
}

//  exporting the Navbar component
export default Navbar