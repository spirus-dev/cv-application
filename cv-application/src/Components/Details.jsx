import React from 'react'
import '../Styles/Details.css'

const Details = ({details,detailsModifier}) => {
  const handleSubmit=function(){
    const firstName=document.querySelector("#firstName").value;
    detailsModifier({
      ...details,
      firstName: firstName
    })
  }
  return (
    <div className='details'>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Details