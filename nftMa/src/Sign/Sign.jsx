import { useState } from 'react'
import classes2 from '../Sign/Sign.module.scss'
import IPlaceh from './assets/ImagePlaceholder.png'
import User1 from './assets/User1.png'
import EnvelopeSimple from './assets/EnvelopeSimple.png'
import LockKey from './assets/LockKey.png'

import Header from '../header/header.jsx'



function Sign() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
        <main>
        <section>
          <img src={IPlaceh} alt="" />
          <div>
            <h1>
                Create account
            </h1>
            <p>
              Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>
              <div>
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
                <button>Create account</button>
              </div>
          </div>
        </section>
        </main>
    </>
  )
}

export default Sign
