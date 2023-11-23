// importing the component's style sheet
import './style.css'

//  creating de Product detail's component as DetailCard 
const DetailCard = (data) => {
    
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
//  exporting DetailCard's component 
export default DetailCard