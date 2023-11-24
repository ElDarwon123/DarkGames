// import the stylesheet
import './style.css' 

// define the Layout component
const Layout = ( { children } ) => { 
    // render the Layout component
    return( 
        <div className=" layout"> 
            {children} 
        </div>
    )
}

export default Layout // export the Layout component as default
