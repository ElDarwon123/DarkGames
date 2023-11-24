//  import the Merch's style sheet
import './style.css'
//  import the MerchProduct component
import MerchProduct from '../../Components/MerchProduct'
//  import the Layout component
import Layout from '../../Components/Layout'

//  define the Merch component
const Merch = () => {
    //  render the MerchProduct into Merch
    return(
        <Layout>
            <MerchProduct/>
            <MerchProduct/>
            <MerchProduct/>
            <MerchProduct/>
        </Layout>
        
    )
}
export default Merch