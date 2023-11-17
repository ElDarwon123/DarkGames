
import './style.css'


const DetailCard = (data    ) => {
    
    return(
        <aside className='flex'>
            <div className='containDetail'>
                <figure>
                <p >{game.description}</p>
                <p>{game.name}</p>
                
                <img src={data.data.photo} alt="" />
                <p>{data.data.name}</p>
                </figure>
            </div>
        </aside>
    )
}

export default DetailCard