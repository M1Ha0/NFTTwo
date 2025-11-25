import { useState } from 'react'
import classes3 from '../SignWithBrows/SignWithBrows.module.scss'
import leftI from './assets/Lholder.png'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import { Link } from 'react-router-dom'
import fox from './assets/Metamask.png'
import coin from './assets/Coinbase.png'
import wallet from './assets/WalletConnect.png'

function SignWithBrows() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
        <main className={classes3.main}>
        <section>
          <img src={leftI} alt="" />
          <div className={classes3.rightD}>
            <h2>
                Connect wallet
            </h2>
            <p>
              Choose a wallet you want to connect. There are several wallet providers.
            </p>
              <div className={classes3.inD}>
                <div>
                 <img src={fox} alt="" />
                  <h5>Metamask</h5>
                </div>
                <div>
                  <img src={wallet} alt="" />
                  <h5>Wallet Connect</h5>
                </div>
                <div>
                    <img src={coin} alt="" />
                  <h5>Coinbase</h5>
                </div>
              </div>
          </div>
        </section>
        </main>
        <Footer/>
    </>
  )
}

export default SignWithBrows
