import { useState } from 'react'
import classes from '../header/header.module.scss'
import stor from './assets/storefront.png'
import but from './assets/user.png'
import { Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <Link to = {'/'}>
          <div>
            <img src={stor} alt="" />  
            <p>NFT Marketplace</p>
          </div>
          </Link>
          <ul>
            <li>
              <a>Marketplace</a>
            </li>
            <li>
              <a>Rankings</a>
            </li>
            <li>
              <a>Connect a wallet</a>
            </li>
            <li>
              <Link className={classes.liSign} to = {'/sign'}>
              <button>
                <img src={but} alt="" />
                Sign Up
              </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
