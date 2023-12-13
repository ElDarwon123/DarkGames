//  importing Navlink for the router
import { NavLink } from 'react-router-dom'

// importing the style sheet's component
import './style.css'

// creating the Product card as Card
const Card = (data) => {
/*
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const Myref = useRef()

    useEffect( ()=> {
        Myref.current.addEventListener('onMouseEnter', showDetail)
        return()=>{
            Myref.current.removeEventListener('onMouseLeave', closeDetail)
        }
    }) 
    const showDetail = () => {
        console.log("mouse enter")
    }
    const closeDetail = () => {
        console.log('mouse leave')
    }
    */
// 
/////////onMouseLeave={() => context.closeProductDetail() } onClick={showProduct(data.data)}

// if the product's price =  0 return the card with price = free to play      
{
        if(data.data.price == 0){
            return(
                <NavLink to='/games'>
                    <figure className="figureCard">
                        <img 
                        className="imageCard"
                        src={data.data.image} 
                        alt="" />
                        <div className='txtCard'>
                            <p className='price'>Free to play</p>
                            <p className='nameCard'>{data.data.name}</p>
                        </div>
                    </figure>
                </NavLink>
                
            )
        }
        
        
    }
    return(
        <>
        <NavLink to='/games'>
            <figure id='Cards' className="figureCard ">
                
                <img 
                className="imageCard"
                src={data.data.image} 
                alt="" />
                <div className='txtCard'>
                    <p className='price'>COP ${data.data.price}</p>
                    <p className='nameCard'>{data.data.name}</p>
                    <p className='categories'>by: {data.data.developer.name}</p>
                    
                </div>  
                
            </figure>
        </NavLink>
                
            
        </>
            
                
            
        
    )
}

//  exporting the Card component
export default Card;