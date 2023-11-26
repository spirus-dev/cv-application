import React from 'react'
import '../Styles/Main.css'
import Details from './Details'
import CV from './CV'

const Main = (props) => {
  return (
    <div className='main'>
        <Details details={props.details} detailsModifier={props.detailsModifier}></Details>
        <CV details={props.details}></CV>
    </div>
  )
}

export default Main