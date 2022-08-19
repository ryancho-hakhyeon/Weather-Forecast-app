import React, { useState } from 'react'


import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropUpLine } from 'react-icons/ri'

import './header.css'

const Hearder = ({submitSearch}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [location, setLocation] = useState('')

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location ==='') return;
        submitSearch(location)
    }

    return (
        <div className={isOpen ? 'container__show': 'container__header'}>
            {isOpen && 
            <form className='container__form'>
                <label>
                    <input type="text" placeholder='Search for Location' onChange={e => setLocation(e.target.value)}/>
                    <button className='search__button' onClick={onSubmit}>Search</button>
                </label>
            </form>
            }
            <div className={isOpen ? 'container__box-show' :'container__box'} onClick={() => setIsOpen(!isOpen)}>
                <div className='text__box' >
                    <h2>Weather Forecast</h2>
                </div>
                {!isOpen && <RiArrowDropDownLine className='text__arrow-icon' />}

                {isOpen && <RiArrowDropUpLine className='text__arrow-icon' />}
                
            </div>
        </div>
    )
}

export default Hearder
