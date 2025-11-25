import { useState } from 'react'
import App1 from './App.module.scss'
import Page_Home from './Page_Home/Page_Home.jsx'
import Sign from './Sign/Sign.jsx'
import SignWithBrows from './SignWithBrows/SignWithBrows.jsx'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Page_Home/>} />
      <Route path='sign' element={<Sign/>} />
      <Route path='signWB' element={<SignWithBrows/>}/>
    </Routes>
    </>
  )
}
export default App
