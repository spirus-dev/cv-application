import React from 'react'
import "../Styles/CV.css"

const CV = (props) => {
    const mailLink= `mailto:${props.details.mail}`;
    const phoneLink= `tel:${props.details.phone}`
  return (
    <div className='cv'>
        <div className='cv-main'>
            <div className="personal">
                <div className='name'><span className='bold'>{props.details.firstName}</span> {props.details.lastName}</div>
                <div className="contact">
                    <div className="contact-main">
                        <div className="mail">
                            <i className="uil uil-envelope"></i>
                            <a href={mailLink}>{props.details.mail}</a>
                        </div>
                        <div className="phone">
                            <i className="uil uil-phone"></i>
                            <a href={phoneLink}>{props.details.phone}</a>
                        </div>
                    </div>
                </div>
                <div className="description">
                    {props.details.personalDescription}
                </div>
            </div>
            <div className="education">
                <div className="education-title">
                    <i className="uil uil-book"></i> Education
                </div>
                <div>{props.details.educationPlace}</div>
                <div>{props.details.educationCourse}</div>
                <div>{props.details.educationCourseStartYear}-{props.details.educationCourseEndYear}</div>
                <div className="education-description">
                    {props.details.educationCourseDescription}
                </div>
            </div>
            <div className="work">
                <div className="work-title">
                    <i className="uil uil-bag"></i> Work
                </div>
                <div>{props.details.workPlace}</div>
                <div>{props.details.workRole}</div>
                <div>{props.details.workRoleStartYear}-{props.details.workRoleEndYear}</div>
                <div className="work-description">
                    {props.details.workRoleDescription}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CV