import { useState } from 'react'
import classes2 from '../Sign/Sign.module.scss'
import IPlaceh from './assets/ImagePlaceholder.png'
import User1 from './assets/User1.png'
import EnvelopeSimple from './assets/EnvelopeSimple.png'
import LockKey from './assets/LockKey.png'

import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import { Link } from 'react-router-dom'


function Sign() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
        <main className={classes2.main}>
        <section>
          <img src={IPlaceh} alt="" />
          <div className={classes2.rightD}>
            <h2>
                Create account
            </h2>
            <p>
              Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>
              <div className={classes2.inD}>
                <div>
                  <img src={User1} alt="" />
                  <input type="text" placeholder='Username' />
                </div>
                <div>
                  <img src={EnvelopeSimple} alt="" />
                  <input type="email" placeholder='Email Address'/>
                </div>
                <div>
                  <img src={LockKey} alt="" />
                  <input type="password" placeholder='Password'/>
                </div>
                <div>
                  <img src={LockKey} alt="" />
                  <input type="password" placeholder='Confirm Password'/>
                </div>
                <nav className={classes2.s}>
                  <button>Create account</button>
                  <Link to = {'/signWB'}>
                      Connect wallet
                  </Link>
                </nav>
              </div>
          </div>
        </section>
        </main>
        <Footer/>
    </>
  )
}

export default Sign
