import { useState } from 'react'
import App1 from './App.module.scss'
import Header from './header/header.jsx'
import Page_Home from './Page_Home/Page_Home.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Header/>
      <Page_Home/>
    </>
  )
}
export default App
