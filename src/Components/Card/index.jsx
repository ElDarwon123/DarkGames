import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context'
import './style.css'

const Card = (data) => {
    const context = useContext(CartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
//////////NECESITO HACER EL TAL CON LOS HOOKS PARA TERMINAR EL HOVER CON EL DETAIL Y METERELE MIERDAS CAPAZ CARRITO UWU
/////////INVESTIGAR USEREF EN MI WHATS HAY DOCUMENTACIÓN 
///////// ESTO ES PAL VIERNES :V
    {
        if(data.data.price == 0){
            return(
                <figure className="figureCard" onMouseLeave={() => context.closeProductDetail() } onClick={showProduct(data.data)}>
                <img 
                className="imageCard"
                src={data.data.photo} 
                alt="" />
                <div className='txtCard'>
                    <p className='price'>Free to play</p>
                    <p className='nameCard'>{data.data.name}</p>
                </div>
            
        </figure>
            )
        }else{
            
        }
        
        
    }
    return(
        <figure id='Cards' className="figureCard" onMouseEnter={showProduct(data.data)} onMouseLeave={() => context.closeProductDetail() } >
            <img 
            className="imageCard"
            src={data.data.photo} 
            alt="" />
            <div className='txtCard'>
                <p className='price'>COP ${data.data.price}</p>
                <p className='nameCard'>{data.data.name}</p>
            </div>
        </figure>
    )
}

/*

            <p className='categories'>mmo</p>
            <p className='categories'>mmo</p>
            <p className='categories'>mmo</p>*/ 
export default Card;