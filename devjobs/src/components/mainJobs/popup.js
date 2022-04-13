import React from 'react'


export default function popup() {
  return (
    <div className='popup'>
        <div className='inputWrapper'>
                <img src="../../../assets/desktop/icon-location.svg" alt="locationIcon"></img>
                <input type="text" placeholder='Filter by location...'/>
            </div>

            <div className='searchBox'>
                <input type="checkbox" id="checkBoxFullTime"></input>
                <label htmlFor='checkBoxFullTime'></label>
                <button>Search</button>
            </div>
    </div>
  )
}


