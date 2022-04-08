import React from 'react'
import { useState } from 'react'
import "./header.css"

export default function Header(props) {

  return (
    <div className='header'>
        <img src="../../../assets/desktop/bg-pattern-header.svg" alt='backgroundHeader' className='bgHeader' />
        <img src="../../../assets/desktop/logo.svg" id="logoDevJobs" alt="logoDevJobs"></img>

        <div className='heaederToggleFlexxer'>
            <img src="../../../assets/desktop/icon-sun.svg" alt="sunIcon"></img>
            <div className='rectangle'>
                <button onClick={props.toggle} className={props.mode ? "toggleCircle left" : "toggleCircle right"}></button>
            </div>
            <img src="../../../assets/desktop/icon-moon.svg" alt="moonIcon"></img>
        </div>
        
    </div>
  )
}
