import { useContext } from 'react'
import { CartContext } from '../Context'
import './style.css'

const DetailCard = () => {
    const context = useContext(CartContext)
    return(
        <aside className={`${context.isProductDetalOpen  ? 'flex' : 'hidden' } productDetail`}>
            <div className='containDetail'>
                <figure>
                <iframe width="560" height="315" src={context.productToShow.trailer} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>${context.productToShow.name}</p>
                </figure>
            </div>
        </aside>
    )
}

export default DetailCard