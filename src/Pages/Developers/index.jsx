//  importing useState and useEffect unto de page
import { useState, useEffect } from "react"
// import axios from "axios";
//  importing the Developer component into the page
import Developer from "../../Components/Developer";

//  import the Layout component
import Layout from "../../Components/Layout";

//  define the Developers component
const Developers = () => {

    const [names, setNames] = useState([]);
    const [names2, setNames2] = useState([]);
/*
    useEffect(()=>{
        axios.get('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Developer/')
        .then(response => {setNames(response.data)})
        axios.get('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Game/')
        .then(response => {setNames2(response.data)
        .catch(error => {console.error('Error fetching data from API 1', error);
        })
        })
        

    },[])
    
*/
//  API consumption
useEffect(()=>{
    fetch('http://localhost:6900/api/developer')
    .then(response => response.json())
    .then(data => setNames(data.foundDeveloper))})
    //  render the Developers component
    return(
        <>
        
            <Layout>
            {
                names?.map(name=>(<Developer key={name._id} data={name} />))
            }
            </Layout>
            
        </>
            
        
    )
}

/*


    {   
            names.map(item => (
            <div key={item.id}>
                <img src={item.photo} alt="" />
                <p>{item.name}</p>
                
            </div>
            ))
            
        }
        {
            names2.map(item2 => (
                <div key={item2.id}>{item2.name}
                {item.photo}</div>
                ))
        }
*/ 
//  exporting DEvelopers as deafult
export default Developers