import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import DetailCard from "../../Components/DetailCard"


const Games = () => {
    const [games, setGames] = useState()
    const [developers, setDevelopers] = useState()
    useEffect(()=>{
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Game/?format=json')
        .then(response => response.json())
        .then(data => setGames(data))
    })
    
    return(
        <>
            <Layout>
            
            {
                games?.map(game=>(<DetailCard key={game.id} data={game} />))
                
            }
            
        </Layout>
        
        </>
        
    )
}
export default Games