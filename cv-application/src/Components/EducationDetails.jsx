import React, { useState } from 'react'
import '../Styles/EducationDetails.css'

const EducationDetails = ({details,detailsModifier}) => {
  const [flag, setFlag] = useState(false)
  const [componentDetails, setComponentDetails] = useState(details)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const educationPlace=document.querySelector("#educationPlace");
    const educationCourse=document.querySelector("#educationCourse");
    const educationCourseStartYear=document.querySelector("#educationCourseStartYear");
    const educationCourseEndYear=document.querySelector("#educationCourseEndYear");
    const educationCourseDescription=document.querySelector("#educationCourseDescription");
    const button=document.querySelector("#button");

    if(flag){        
        detailsModifier({
            ...details,
            educationPlace:educationPlace.value,
            educationCourse:educationCourse.value,
            educationCourseStartYear:educationCourseStartYear.value,
            educationCourseEndYear:educationCourseEndYear.value,
            educationCourseDescription:educationCourseDescription.value
        })
        setFlag(!flag);
        button.innerText="Edit"
    }
    else{
        setFlag(!flag);
        button.innerText="Submit"
    }
    educationPlace.disabled=flag;
    educationCourse.disabled=flag;
    educationCourseStartYear.disabled=flag;
    educationCourseEndYear.disabled=flag;
    educationCourseDescription.disabled=flag;
  }

  const handlePlace=(e)=>{
    setComponentDetails({
        ...componentDetails,
        educationPlace: e.target.value
    })  
  }

  const handleCourse=(e)=>{
    setComponentDetails({
        ...componentDetails,
        educationCourse: e.target.value
    })      
  }

  const handleStartYear=(e)=>{
    setComponentDetails({
        ...componentDetails,
        educationCourseStartYear: e.target.value
    })      
  }

  const handleEndYear=(e)=>{
    setComponentDetails({
        ...componentDetails,
        educationCourseEndYear: e.target.value
    })      
  }

  const handleCourseDescription=(e)=>{
    setComponentDetails({
        ...componentDetails,
        educationCourseDescription: e.target.value
    })  
  }
  return (
    <div className='educationDetails'>
        <div className="educationDetailsTitle">Education Details</div>
        <form onSubmit={handleSubmit}>
            <div className="inputRow">
                <label htmlFor="educationPlace">College name : </label>
                <input type="text" id='educationPlace' disabled value={componentDetails.educationPlace} onChange={handlePlace}/>
            </div>
            <div className="inputRow">
                <label htmlFor="educationCourse">Course name : </label>
                <input type="text" id='educationCourse' disabled value={componentDetails.educationCourse} onChange={handleCourse}/>
            </div>
            <div className="inputRow">
                <label htmlFor="educationCourseStartYear">Start year : </label>
                <input type="text" id='educationCourseStartYear' disabled value={componentDetails.educationCourseStartYear} onChange={handleStartYear}/>
            </div>
            <div className="inputRow">
                <label htmlFor="educationCourseEndYear">End Year : </label>
                <input type="text" id='educationCourseEndYear' disabled value={componentDetails.educationCourseEndYear} onChange={handleEndYear}/>
            </div>
            <div className="inputRow">
                <label htmlFor="educationCourseDescription">Course description : </label>
                <textarea id="educationCourseDescription" rows="10" disabled value={componentDetails.educationCourseDescription} onChange={handleCourseDescription}></textarea>
            </div>

            <button type="submit" id="button">Edit</button>
        </form>
    </div>
  )
}

export default EducationDetails