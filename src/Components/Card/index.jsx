import './style.css'

const Card = (data) => {
    {
        if(data.data.price == 0){
            return(
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
            )
        }
    }
    return(
        <figure className="figureCard">
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