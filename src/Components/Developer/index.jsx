//  importing the Layout's component
import Layout from '../Layout'
//  importing the Developer's styles sheet
import './style.css'
const Developer = (data2) => {
    return(
        <Layout className='ldev' >
            <div className='devContainer'>
                
            <div className='divimg'>
                <img src={data2.data2.photo} alt="" />
            </div>
            <div className='devp'>
                <p>{data2.data2.name}</p>
                <p>{data2.data2.email}</p>
            </div>
            
            </div>
        </Layout>
        
    )
}
// exporting the Developer component
export default Developer