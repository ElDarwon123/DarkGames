//  importing useState and useEffect into de Home
import { useState, useEffect } from 'react'
//  import the Layout component
import Layout from '../../Components/Layout'
//  import the Card component
import Card from '../../Components/Card'
//  import the page's style sheet 
import './style.css'

//  Define the Home page 
const Home = () => {
    //  initializing 2 const
    const [items, setItems] = useState(null) 
    

    //  the API is consumed
    useEffect(() => {
        fetch('http://localhost:6900/api/games')
        .then(response => response.json())
        .then(data => setItems(data.foundGames))
    })
    


    //  render the Home page
    return(
        <>
        <Layout>
               
                    {   
                        //  map the api and render the Card compoent
                        items?.map(item =>(<Card key={item._id} data={item}/>))
                        
                    }
        </Layout>
             
        </>
            
            
            
    )
}
//  export Home as default
export default Home