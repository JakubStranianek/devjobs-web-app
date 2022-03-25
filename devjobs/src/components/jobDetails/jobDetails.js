import React from 'react'

import {useParams} from "react-router-dom"
import data from "../mainJobs/data.json"
import "./jobDetails.css"
import { Link } from 'react-router-dom'

export default function JobDetails() {
  const {position} = useParams()
  const job = data.find(job => job.position === position)

  return (
    <div className='jobDetailsFlexxer'>
      <section className='headerJobDetails'> 
        <div style={{backgroundColor: job.logoBackground}} className='jobDetailsLogo'>
          <img src={job.logo} alt="jobLogoDetail"></img>
        </div>

      <div className='textAndButtonFlex'>
        <div className='headerTextWrapper'>
          <h6>{job.company}</h6>
          <p>{job.company.toLowerCase() + ".com"}</p>
        </div>

      <div id='linkBg'>
        <Link to={job.website} onClick={e => e.preventDefault()}>Company Site</Link>
      </div>

      </div>
      </section>
    
    
      {/* <section className='jobDetailsMain'>

      </section> */}
    
    </div>
    
  )
}
