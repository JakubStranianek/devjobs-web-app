import React from 'react'
import "./mainJobs.css"
import data from "./data.json"

export default function mainJobs() {
  return (
    <div className='mainJobsWrapper'>
      
      {data.map(index => 
        <div className='job' key={"job/" + index.company}>
          <div style={{backgroundColor: index.logoBackground}} className="logoJob" >
            <img src={index.logo} alt={index.company}></img>
          </div>
            <p>{index.postedAt + " . " + index.contract}</p>
            <h1>{index.position}</h1>
            <p>{index.company}</p>
            <h6>{index.location}</h6>
        </div>
      )}
    </div>
  )
}
