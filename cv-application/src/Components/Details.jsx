import React from 'react'
import '../Styles/Details.css'
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import WorkDetails from './WorkDetails';

const Details = ({details,detailsModifier}) => {
  const handleSubmit=function(){
    const firstName=document.querySelector("#firstName").value;
    detailsModifier({
      ...details,
      firstName: firstName
    })
  }
  return (
    <div className="details">
      <PersonalDetails details={details} detailsModifier={detailsModifier}></PersonalDetails>
      <EducationDetails details={details} detailsModifier={detailsModifier}></EducationDetails>
      <WorkDetails details={details} detailsModifier={detailsModifier}></WorkDetails>
    </div>
  )
}

export default Details