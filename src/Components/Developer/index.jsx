//  importing the Layout's component
import Layout from '../Layout'
//  importing the Developer's styles sheet
import './style.css'
const Developer = (data) => {
    return(
        <Layout className='ldev' >
            <div className='devContainer'>
                
            <div className='divimg'>
                <img src={data.data.image} alt="" />
            </div>
            <div className='devp'>
                <p>{data.data.name}</p>
                <p>{data.data.email}</p>
            </div>
            
            </div>
        </Layout>
        
    )
}
// exporting the Developer component
export default Developer