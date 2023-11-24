//  import the component's style sheet 
import './style.css'

//  define the MerchProduct as a component
const MerchProduct = () => {
    //  render the MerchProduct component
    return(
        <figure className="figureProduct">
            <img src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltc040bd6ec6b410c0/5f593f79339eb80904a19326/2018-09-07_2000_03_27.229_plush_teemohat.png" alt="" />
            <div className='productTxt'>
                <p className="nameProduct">
                    Gorro de Teemo
                </p>
                <p className="priceProduct">
                    $50000
                </p>
            </div>
            
        </figure>

    
    )
}
//  export the MerchProduct component as default
export default MerchProduct