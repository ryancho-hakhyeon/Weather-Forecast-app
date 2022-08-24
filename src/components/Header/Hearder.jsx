import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropUpLine } from 'react-icons/ri'

import './header.css'
import { geoApiOptions } from '../../hooks/getGeoAPIs'

const Hearder = ({ submitSearch }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [location, setLocation] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!location || location === '') return;
    
        geoApiOptions.params.namePrefix = location
        await axios.request(geoApiOptions).then((response) => {
            submitSearch(
                response.data.data.map((city) => {
                    return {
                        lat: `${Math.round(city.latitude * 100) / 100}`,
                        lon: `${city.longitude}`,
                        city: `${city.name}`,
                        country: `${city.countryCode}`
                    }
                })
            )
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className={isOpen ? 'container__show': 'container__header'}>
            {isOpen && 
            <form className='container__form'>
                <label>
                    <input type="text" 
                        placeholder='Search for Location' 
                        onChange={e => setLocation(e.target.value)}
                        />
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

Hearder.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default Hearder
