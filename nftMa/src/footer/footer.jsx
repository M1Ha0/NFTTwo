import { useState } from 'react'
import classesF from '../footer/footer.module.scss'
import { Link } from 'react-router-dom'
import stor from './assets/storefront.png'
import DiscordLogo from './assets/DiscordLogo.png'
import InstagramLogo from './assets/InstagramLogo.png'
import YoutubeLogo from './assets/YoutubeLogo.png'
import TwitterLogo from './assets/TwitterLogo.png'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer>
        <section>
          <div className={classesF.divf}>
            <Link to = {'/'}>
              <div className={classesF.mark}>
                  <img src={stor} alt="" />  
                  <h1>NFT Marketplace</h1>
              </div>
            </Link>
            <p>
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p>
              Join our community 
            </p>
            <div className={classesF.divI}>
              <img src={DiscordLogo} alt="" />
              <img src={YoutubeLogo} alt="" />
              <img src={TwitterLogo} alt="" />
              <img src={InstagramLogo} alt="" />
            </div>
          </div>
          <div className={classesF.divf}>
            <h1>Explore</h1>
            <p>Marketplace</p>
            <p>Rankings</p>
            <p>Connect a wallet</p>
          </div>
          <div className={classesF.divf}>
            <h1>Join our weekly digest</h1>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <div className={classesF.strangeBut}>
              <input type="email" placeholder='Enter your email here'/>
              <button>Subscribe</button>
            </div>
          </div>
        </section>
        <div className={classesF.end}>
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
