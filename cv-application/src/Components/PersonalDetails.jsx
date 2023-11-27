import React, { useState } from 'react'
import "../Styles/PersonalDetails.css"

const PersonalDetails = ({details, detailsModifier}) => {

  const [flag, setFlag] = useState(false)
  const [componentDetails, setComponentDetails] = useState(details)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const firstName=document.querySelector("#firstName");
    const lastName=document.querySelector("#lastName");
    const mail=document.querySelector("#mail");
    const phone=document.querySelector("#phone");
    const personalDescription=document.querySelector("#personalDescription");
    const button=document.querySelector("#button");

    if(flag){        
        detailsModifier({
            ...details,
            firstName:firstName.value,
            lastName:lastName.value,
            mail:mail.value,
            phone:phone.value,
            personalDescription:personalDescription.value
        })
        setFlag(!flag);
        button.innerText="Edit"
    }
    else{
        setFlag(!flag);
        button.innerText="Submit"
    }
    firstName.disabled=flag;
    lastName.disabled=flag;
    mail.disabled=flag;
    phone.disabled=flag;
    personalDescription.disabled=flag;
  }

  const handleFirstName=(e)=>{
    setComponentDetails({
        ...componentDetails,
        firstName: e.target.value
    })  
  }

  const handleLastName=(e)=>{
    setComponentDetails({
        ...componentDetails,
        lastName: e.target.value
    })      
  }

  const handleMail=(e)=>{
    setComponentDetails({
        ...componentDetails,
        mail: e.target.value
    })      
  }

  const handlePhone=(e)=>{
    setComponentDetails({
        ...componentDetails,
        phone: e.target.value
    })      
  }

  const handlePersonalDescription=(e)=>{
    setComponentDetails({
        ...componentDetails,
        personalDescription: e.target.value
    })  
  }
  return (
    <div className='personalDetails'>
        <div className="personalDetailsTitle">Personal Details</div>
        <form onSubmit={handleSubmit}>
            <div className="inputRow">
                <label htmlFor="firstName">First name : </label>
                <input type="text" id='firstName' disabled value={componentDetails.firstName} onChange={handleFirstName}/>
            </div>
            <div className="inputRow">
                <label htmlFor="lastName">Last name : </label>
                <input type="text" id='lastName' disabled value={componentDetails.lastName} onChange={handleLastName}/>
            </div>
            <div className="inputRow">
                <label htmlFor="mail">Email : </label>
                <input type="email" id='mail' disabled value={componentDetails.mail} onChange={handleMail}/>
            </div>
            <div className="inputRow">
                <label htmlFor="phone">Phone : </label>
                <input type="text" id='phone' disabled value={componentDetails.phone} onChange={handlePhone}/>
            </div>
            <div className="inputRow">
                <label htmlFor="personalDescription">Personal description : </label>
                <textarea id="personalDescription" rows="10" disabled value={componentDetails.personalDescription} onChange={handlePersonalDescription}></textarea>
            </div>

            <button type="submit" id="button">Edit</button>
        </form>
    </div>
  )
}

export default PersonalDetails