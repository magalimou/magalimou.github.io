import React from 'react'
import './styles/global.css'

import Button from './components/ui/Button'
import Header from './components/layout/Header'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'




function App() {

  return (
    <>
      <Header />
      <p>Hi there, Im Magali</p>
      <h1>Software Developer</h1>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <div >
      <Button text="Download CV" icon={faArrowDown} className='btn' />
      <Button text="" icon={faArrowDown} className='btn-icon' />
      </div>
    </>
  )
}

export default App
