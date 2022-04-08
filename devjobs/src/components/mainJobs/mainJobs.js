import React, { useState } from 'react'
import "./mainJobs.css"
import data from "./data.json"
import { Link } from "react-router-dom"

export default function MainJobs(props) {
  const [jobData, setJobData] = useState(data);
  const [searchOne, setSearchOne] = useState("");
  const [searchTwo, setSearchTwo] = useState("");

  const checkFullTime = (e) => {
    const checkbox = document.getElementById("checkBoxFullTime").checked
    console.log(checkbox)
    if (checkbox === true) {
      const filteredData = data.filter((job) => job.contract === "Full Time");
      setJobData(filteredData)
    } else {
      setJobData(data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFullTime();
  }

  
  return (
    <div className='mainJobsWrapper'>
      <div className='headerInputs'>
            <div className='inputWrapper' >
                <img src="../../../assets/desktop/icon-search.svg" alt="searchIcon"></img>
                <input type="text" placeholder='Filter by title, companie, expertise...' value={searchOne} onChange={e => (setSearchOne(e.target.value))}/>
                
                <button className='filterButton'>
                  <img src="../../../assets/mobile/icon-filter.svg" alt="filterIcon"></img>
                </button>
                
                <button className='searchButton'>
                  <img src="../../../assets/desktop/icon-search.svg" alt="searchIcon" className='filter-white'></img>
                </button>

            </div>

            <div className='inputWrapper'>
                <img src="../../../assets/desktop/icon-location.svg" alt="locationIcon"></img>
                <input type="text" placeholder='Filter by location...' value={searchTwo} onChange={e => (setSearchTwo(e.target.value))} />
            </div>

            <div className='searchBox'>
                <input type="checkbox" id="checkBoxFullTime"></input>
                <label htmlFor='checkBoxFullTime'></label>
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>

      {jobData?.filter( (job) => {
        if (searchOne === "" && searchTwo === "") {
          return job;
        }
        if (job.position.toLowerCase().includes(searchOne.toLowerCase()) || job.company.toLowerCase().includes(searchOne.toLowerCase())) 
        if (job.location.toLowerCase().includes(searchTwo.toLowerCase())) 
        return job;
      }).map(index => 
        <div className={props.mode === "false" ? "job" : "jobDark"} key={"job/" + index.company + index.id}>
          <div style={{backgroundColor: index.logoBackground}} className="logoJob" >
            <img src={index.logo} alt={index.company}></img>
          </div>

          <div className='jobContent'>
            <p>{index.postedAt + " . " + index.contract}</p>
            <h1><Link to={`/jobs/${index.position}`} className={props.mode === "false" ? "blackText" : "whiteText"}>{index.position}</Link></h1>
            <p>{index.company}</p>
            <h6>{index.location}</h6>
          </div>
        </div>
      )}
    </div>
  )
}
