//  importing footer's style sheet
import './style.css'

//  creating the footer component as Footer
const Footer = () => {
    return(
        <div className='footer'>
            <footer>
                <img src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" width='200px' alt="" />
                    <a href="https://www.facebook.com/darwin.gomez.3323457">
                       
                        Facebook</a>
                    <a href="https://open.spotify.com/user/312niuwoijeizwgjgf5e6lfsst64">
                        
                        Spotify</a>
                    <a href="https://www.instagram.com/el_darwon/">
                        
                        Instagram
                    </a>
            </footer>
                
            
        </div>
    )
}
//  exporting the Footer component
export default Footer