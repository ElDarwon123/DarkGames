import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import DetailCard from '../../Components/DetailCard'
import './style.css'


const Home = () => {
    const [items, setItems] = useState(null) 
    


    useEffect(() => {
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Game/?format=json')
        .then(response => response.json())
        .then(data => setItems(data))
    })
    



    return(
        <>
        <Layout>
                
                {
                    items?.map(item =>(<Card key={item.id} data={item}/>))
                    
                }
            
        </Layout>
             <DetailCard/>
        </>
            
            
            
    )
}

export default Home