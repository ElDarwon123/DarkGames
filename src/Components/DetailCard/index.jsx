
import './style.css'


const DetailCard = (data) => {
    
    return(
        <aside className='flex'>
            <div className='containDetail'>
                <figure>
                <p className='m-0 text-black'>{data.data.description}</p>
                <p>{data.data.name}</p>
                
                <img src={data.data.photo} alt="" />
                </figure>
            </div>
        </aside>
    )
}

export default DetailCard