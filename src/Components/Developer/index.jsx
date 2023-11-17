import Layout from '../Layout'
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
export default Developer