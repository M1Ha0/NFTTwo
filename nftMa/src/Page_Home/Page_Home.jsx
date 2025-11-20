import { useState } from 'react'
import classes1 from '../Page_Home/Page_Home.module.scss'
import n from './assets/spacewolk.png'
import r from './assets/Avatar.png'
import roket from './assets/RocketLaunch.png'
import Header from '../header/header.jsx'



function Page_Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <main>
         <section className={classes1.digit}>
            <div className={classes1.poddigit}>
             <div className={classes1.dis}>
              <h1>Discover digital art & Collect NFTs</h1>
              <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
              <button>
                <img src={roket} alt="" />
                Get Started
              </button>
                <div className={classes1.ul}>
                  <div>
                      <h4>240k+ </h4>
                      <p>Total Sale</p>
                  </div>
                  <div>
                    <h4>100k+</h4>
                    <p>Auctions</p>
                  </div>
                  <div>
                    <h4>240k+ </h4>
                    <p>Artists</p>
                  </div>
                </div>
             </div>
             <div className={classes1.cart}>
              <img src={n} alt="" />
              <p className={classes1.T}>Space Walking</p>
              <div>
                <img src={r} alt=""/>
                <p>Animakid</p>
              </div>
             </div>
             </div>
          </section>
          <section className={classes1.trend}>
            <div className={classes1 .podtrend}>
              <div className={classes1.tr}>
                <h1>Trending Collection</h1>
                <p>Checkout our weekly updated trending collection.</p>
              </div>

              <div>
                <div>

                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default Page_Home
