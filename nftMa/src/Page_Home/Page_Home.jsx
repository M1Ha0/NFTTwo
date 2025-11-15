import { useState } from 'react'
import classes1 from '../Page_Home/Page_Home.module.scss'
import n from './assets/spacewolk.png'
import r from './assets/Avatar.png'

function Page_Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main>
          <section>
             <div>
              
             </div>
             <div className={classes1.cart}>
              <img src={n} alt="" />
              <p className={classes1.T}>Space Walking</p>
              <div>
                <img src={r} alt=""/>
                <p>Animakid</p>
              </div>
             </div>
          </section>
        </main>
    </>
  )
}

export default Page_Home
