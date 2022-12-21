import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiSettings } from 'react-icons/fi'
import { WiStrongWind, WiBarometer } from 'react-icons/wi'
import { AiFillEye } from 'react-icons/ai'
import { ImDroplet } from 'react-icons/im'

export default function DayWeather(props) {
    const isDone = () => {
        if (liveWeather.response === undefined) {
            return <p className='info'>Data loading...</p>
        } else {
            return (
                <div className='day-weather'>
                    <div className="head">
                        <h1>Tetouan Live Weather</h1>
                        <FiSettings style={{fontSize: "1.5rem", cursor: 'pointer'}} />
                    </div>
                    <div className="temp">
                        <p>{liveWeather.response.ob.tempC}°C</p>
                        <img style={{width: '100px'}} src={`${process.env.PUBLIC_URL + '/imgs/icons/' + liveWeather.response.ob.icon}`} alt="" />
                    </div>
                    <div className="details">
                        <div className="info">
                            <WiStrongWind />
                            <p>Wind Speed</p>
                            <p>{liveWeather.response.ob.windKPH}KPH</p>
                        </div>
                        <div className="info">
                            <WiBarometer />
                            <p>Pressure</p>
                            <p>{liveWeather.response.ob.pressureMB}MB</p>
                        </div>
                        <div className="info">
                            <AiFillEye />
                            <p>Visibility</p>
                            <p>{liveWeather.response.ob.visibilityKM}KM</p>
                        </div>
                        <div className="info">
                            <ImDroplet />
                            <p>Humidity</p>
                            <p>{liveWeather.response.ob.humidity}%</p>
                        </div>
                    </div>
                </div>  
            )
        }
    }
	const [liveWeather, setLiveWeather] = useState([])

    useEffect(() => {
		const options = {
			method: 'GET',
			url: `https://aerisweather1.p.rapidapi.com/observations/${localStorage.getItem('city')},mar`,
            headers: {
                'X-RapidAPI-Key': '0ffe823d8bmsh992bd06b1bdc0fbp1f781fjsn769cf835f2a7',
                'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
            }
		};

		axios.request(options).then(function (response) {
			setLiveWeather(response.data)
		}).catch(function (error) {
			console.error(error);
		});
	}, [props.isSubmitted])
    return (
        <>
            {isDone()}
        </>
    )
}
