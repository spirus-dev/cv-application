import { useState } from 'react'
import './App.css'
import Main from './Components/Main'
import data from './defaultDetails.json'

function App() {
  const [details, setDetails] = useState(data)
  return (
    <>
      <div className='header'>CV Builder</div>
      <Main details={details} detailsModifier={setDetails}></Main>
      <div className='footer'>Copyright © SPIRUS</div>
    </>
  )
}

export default App
