import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

import './header.css'
import { fetchGeoData, geoUrl } from '../../hooks/getCurrentLocation'
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'
import { MdOutlineSpaceDashboard, MdOutlineWebAsset } from 'react-icons/md'
import { BiSearchAlt, BiCurrentLocation } from 'react-icons/bi'

const Hearder = ({ submitSearch, unitChange, modeChange }) => {
    const effectRun = useRef(false)
    const [ location, setLocation ] = useState('')
    const [ options, setOptions ] = useState([])
    const [ cityData, setCityData ] = useState([])
    const [ isToggle, setIsToggle ] = useState(false)
    const [ modeTabs, setModeTabs ] = useState('dashboard')

    const debounce = (func) => {
        let timer;
        return (...args) => {
            const cityName = this;
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null
                func.apply(cityName, args)
            }, 300)
        }
    }

    const onHandleChange = (value) => {
        setLocation(value)

        if (!value | value === '') {
            setOptions([])
            return
        }

        fetchGeoData(geoUrl.getGeoByName(value), (locations) => {
            // console.log(location)
            const city_info = locations.data.map((city) => {
                return {   
                    id: `${city.id}`,
                    lat: `${Math.round(city.latitude * 100) / 100}`,
                    lon: `${city.longitude}`,
                    city: `${city.name}`,
                    region: `${city.regionCode}`,
                    country: `${city.countryCode}`
                }
            })
            setOptions(city_info)
        }).catch((err) => {
            console.log(err)
        })
    }

    const optimizedFn = useMemo(() => debounce(onHandleChange), [])

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        // console.log(location)
        
        if (!cityData || cityData === '') {
            return;
        } else {
            submitSearch(cityData)
            setLocation("")
            setCityData([])
        }
    }

    const onHandleAutoComplete = (cityInfo) => {
        const sending_cityInfo = [
            {
                lat: cityInfo.lat,
                lon: cityInfo.lon,
                city: cityInfo.city,
                region: cityInfo.region,
                country: cityInfo.country
            }
        ]
        setLocation(cityInfo.city)
        setCityData(sending_cityInfo)
        setOptions([])
    }

    const onHandleUnitToggle = () => {
        if(!isToggle) {
            setIsToggle(true)
            unitChange('F')
        } else {
            setIsToggle(false)
            unitChange('C')
        }
    }
    
    const onHandleTabMode = (e) => {
        // console.log(e.target.id)
        if(e.target.id === 'dashbox-tab') {
            setModeTabs('webapp')
        } else {
            setModeTabs('dashboard')
        }
        modeChange(modeTabs)
    }

    const onHandleCurrenLocation = useCallback(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                fetchGeoData(geoUrl.getGeoByLocation(position.coords.latitude, position.coords.longitude), (location) => {
                    // console.log(location)
                    const city_info = [
                        {
                            lat: Math.round(location.data[0].latitude * 100) / 100,
                            lon: location.data[0].longitude,
                            city: location.data[0].city,
                            region: location.data[0].regionCode,
                            country: location.data[0].countryCode
                        }
                    ]
                    submitSearch(city_info)
                })
            })
        } else {
            alert("Geolocation is not supported by your brower.")
        }
    }, [submitSearch])

    useEffect(() => {
        if (effectRun.current === false){
            onHandleCurrenLocation()

            return () => {
                console.log("run finish")
                effectRun.current = true
            }
        }
    }, [submitSearch, onHandleCurrenLocation])

    return (
        <div className='header-container'>
            <form className='form-container'>
                <label>
                    <input type="text" placeholder='Search for Loacation' value={location} onChange={(e) => optimizedFn(e.target.value)} />
                    <button className='search-btn' onClick={onHandleSubmit}>
                        <BiSearchAlt className='search-btn-icon' />
                    </button>
                </label>

                <div className='autocomplete-data'>
                    {
                        options.length > 0 &&
                        options.map((option) => {
                            return (
                                <span className='filtered-data' key={option.id} onClick={() => onHandleAutoComplete(option)}>{option.city}, {option.region}, {option.country}</span>
                            )
                        })
                    }
                </div>
            </form>

            <div className='current-location'>
                <BiCurrentLocation className='current-location-icon' onClick={onHandleCurrenLocation} />
            </div>

            <div className='mode-container'>
                <input id='dashbox-tab' type='radio' name='tabs' onClick={onHandleTabMode} />
                <label htmlFor="dashbox-tab"><MdOutlineSpaceDashboard /></label>

                <input id='webapp-tab' type="radio" name='tabs' onClick={onHandleTabMode} defaultChecked/>
                <label htmlFor="webapp-tab"><MdOutlineWebAsset /></label>
            </div>

            <div className='toggle-container'>
                <input type="checkbox" id='unit-toggle' onClick={onHandleUnitToggle} />
                <label htmlFor='unit-toggle'>
                    <TbTemperatureCelsius className='icon-celsius' />
                    <TbTemperatureFahrenheit className='icon-fahrenheit' />
                </label>
            </div>
        </div>
    )
}

Hearder.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default Hearder
