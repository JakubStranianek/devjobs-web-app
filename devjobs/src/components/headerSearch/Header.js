import React from 'react'
import bgHeader from "../../assets/desktop/bg-pattern-header.svg"
import logo from "../../assets/desktop/logo.svg"
import sun from "../../assets/desktop/icon-sun.svg"
import moon from "../../assets/desktop/icon-moon.svg"
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <img src={bgHeader} alt='backgroundHeader' className='bgHeader' />
        <img src={logo} id="logoDevJobs" alt="logoDevJobs"></img>

        <div className='heaederToggleFlexxer'>
            <img src={sun} alt="sunIcon"></img>
            <div className='rectangle'>
                <div className='toggleCircle'></div>
            </div>
            <img src={moon} alt="moonIcon"></img>
        </div>
        

        <div className='headerInputs'>
            <input type="text" placeholder='Filter by title, companie, expertise...'/>
            <input type="text" placeholder='Filter by location...'/>
            <div className='searchBox'>
                <input type="checkbox" id="checkBoxFullTime"></input>
                <label for="checkBoxFullTime"><strong>Full Time Only</strong></label>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}
