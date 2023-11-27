import React, { useState } from 'react'
import '../Styles/WorkDetails.css'

const WorkDetails = ({details,detailsModifier}) => {
    const [flag, setFlag] = useState(false)
    const [componentDetails, setComponentDetails] = useState(details)
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      const workPlace=document.querySelector("#workPlace");
      const workRole=document.querySelector("#workRole");
      const workRoleStartYear=document.querySelector("#workRoleStartYear");
      const workRoleEndYear=document.querySelector("#workRoleEndYear");
      const workRoleDescription=document.querySelector("#workRoleDescription");
      const button=document.querySelector("#button");
  
      if(flag){        
          detailsModifier({
              ...details,
              workPlace:workPlace.value,
              workRole:workRole.value,
              workRoleStartYear:workRoleStartYear.value,
              workRoleEndYear:workRoleEndYear.value,
              workRoleDescription:workRoleDescription.value
          })
          setFlag(!flag);
          button.innerText="Edit"
      }
      else{
          setFlag(!flag);
          button.innerText="Submit"
      }
      workPlace.disabled=flag;
      workRole.disabled=flag;
      workRoleStartYear.disabled=flag;
      workRoleEndYear.disabled=flag;
      workRoleDescription.disabled=flag;
    }
  
    const handlePlace=(e)=>{
      setComponentDetails({
          ...componentDetails,
          workPlace: e.target.value
      })  
    }
  
    const handleRole=(e)=>{
      setComponentDetails({
          ...componentDetails,
          workRole: e.target.value
      })      
    }
  
    const handleStartYear=(e)=>{
      setComponentDetails({
          ...componentDetails,
          workRoleStartYear: e.target.value
      })      
    }
  
    const handleEndYear=(e)=>{
      setComponentDetails({
          ...componentDetails,
          workRoleEndYear: e.target.value
      })      
    }
  
    const handleRoleDescription=(e)=>{
      setComponentDetails({
          ...componentDetails,
          workRoleDescription: e.target.value
      })  
    }
    return (
      <div className='wprkDetails'>
          <div className="workDetailsTitle">Work Details</div>
          <form onSubmit={handleSubmit}>
              <div className="inputRow">
                  <label htmlFor="workPlace">Work Place : </label>
                  <input type="text" id='workPlace' disabled value={componentDetails.workPlace} onChange={handlePlace}/>
              </div>
              <div className="inputRow">
                  <label htmlFor="workRole">Last name : </label>
                  <input type="text" id='workRole' disabled value={componentDetails.workRole} onChange={handleRole}/>
              </div>
              <div className="inputRow">
                  <label htmlFor="workRoleStartYear">Start Year : </label>
                  <input type="text" id='workRoleStartYear' disabled value={componentDetails.workRoleStartYear} onChange={handleStartYear}/>
              </div>
              <div className="inputRow">
                  <label htmlFor="workRoleEndYear">End Year : </label>
                  <input type="text" id='workRoleEndYear' disabled value={componentDetails.workRoleEndYear} onChange={handleEndYear}/>
              </div>
              <div className="inputRow">
                  <label htmlFor="workRoleDescription">Personal description : </label>
                  <textarea id="workRoleDescription" rows="10" disabled value={componentDetails.workRoleDescription} onChange={handleRoleDescription}></textarea>
              </div>
  
              <button type="submit" id="button">Edit</button>
          </form>
      </div>
    )
}

export default WorkDetails