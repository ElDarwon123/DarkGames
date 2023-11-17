import { useRef, useEffect, React, useContext, useState  } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context'

import './style.css'

const Card = (data) => {
    const context = useContext(CartContext)
    const [showDetail, setShowDetail] = useState(false)
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
//////////NECESITO HACER EL TAL CON LOS HOOKS PARA TERMINAR EL HOVER CON EL DETAIL Y METERELE MIERDAS CAPAZ CARRITO UWU
/////////INVESTIGAR USEREF EN MI WHATS HAY DOCUMENTACIÓN 
///////// ESTO ES PAL VIERNES :V
/////////onMouseLeave={() => context.closeProductDetail() } onClick={showProduct(data.data)}
    {
        if(data.data.price == 0){
            return(
                <NavLink to='/games'>
                    <figure className="figureCard">
                        <img 
                        className="imageCard"
                        src={data.data.photo} 
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
                src={data.data.photo} 
                alt="" />
                <div className='txtCard'>
                    <p className='price'>COP ${data.data.price}</p>
                    <p className='nameCard'>{data.data.name}</p>
                </div>  
                
            </figure>
        </NavLink>
                
            
        </>
            
                
            
        
    )
}



/*

            <p className='categories'>mmo</p>
            <p className='categories'>mmo</p>
            <p className='categories'>mmo</p>
            
            <NavLink to='/games' className='nl'>
            </NavLink>
            
            */ 
export default Card;