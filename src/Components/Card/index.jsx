import './style.css'

const Card = () => {
    return(
        <figure className="figureCard">
            <img 
            className="imageCard"
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt670d428d1921eed8/614be30d69b7947c1b3aebd5/9242021_StateofGameplayArticle_Header.jpg" 
            alt="" />
            <p className=' price'>COP $3000</p>
        </figure>
    )
}
/*

            <p className='categories'>mmo</p>
            <p className='categories'>mmo</p>
            <p className='categories'>mmo</p>*/ 
export default Card;