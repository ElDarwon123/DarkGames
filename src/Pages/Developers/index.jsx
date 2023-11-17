import { useState, useEffect } from "react"
import Developer from "../../Components/Developer";
import './style.css'
import Layout from "../../Components/Layout";


const Developers = () => {
    const [names, setNames] = useState(null);
    useEffect(()=>{
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Developer/?format=json')
        .then(response2 => response2.json())
        .then(data2 => setNames(data2))
    })
    return(
        <>
            {
                names?.map(name=>(<Developer key={name.id} data2={name} />))
            }
        </>
            
        
    )
}
export default Developers