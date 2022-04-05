import React from 'react'

import {useParams} from "react-router-dom"
import data from "../mainJobs/data.json"
import "./jobDetails.css"

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
        <div className='flexxer'>
          <h6>{job.company}</h6>
          <p>{job.company.toLowerCase() + ".com"}</p>
        </div>

      <div className='linkBg'>
          <button>Company Site</button>
      </div>

      </div>
      </section>
    
    
      <section className='jobDetailsMain'>
      <div className='widthOfContent'>
        <div className='flexxer row'>  
          <div className='mt-50'>
            <p>{job.postedAt + " . " + job.contract}</p>
            <h1>{job.position}</h1>
            <h6>{job.location}</h6>
          </div>
          
          <div className='linkBg linkBgColorBlue'>
            <button>Apply Now</button>
          </div>
        </div>

          <p>{job.description}</p>

          <h3>Requirements</h3>
          <p>{job.requirements.content}</p>
          <ul>
          {job.requirements.items.map(oneItem => 
              <li>{oneItem}</li>
          )}
          </ul>

          <h3>What You Will Do</h3>
          <p>{job.role.content}</p>
          <ol>
          {job.role.items.map(oneItem => 
              <li>{oneItem}</li>
          )}
          </ol>
        
      </div>  
      </section> 

      <section className='jobDetailsFooter'>
          <div className='flexFooter'>
            <div>
              <h3>{job.position}</h3>
              <p>{job.company}</p>
            </div>

            <div className='linkBg linkBgColorBlue'>
              <button>Apply Now</button>
           </div>
          </div>
      </section>
    
    </div>
    
  )
}
