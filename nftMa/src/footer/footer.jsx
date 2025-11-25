import { useState } from 'react'
import classesF from '../footer/footer.module.scss'
import { Link } from 'react-router-dom'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer>
        <section>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </section>
        <div>
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
