import React, { useState } from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { WiStrongWind, WiBarometer } from 'react-icons/wi'
import { AiFillEye } from 'react-icons/ai'
import { TbSunrise, TbSunset } from 'react-icons/tb'
import { ImDroplet } from 'react-icons/im'

export default function ListItem(props) {
    const [isOpened, setIsOpened] = useState(true)
    const [date, setDate] = useState(new Date(+props.data.validTime.slice(0,4), props.data.validTime.slice(5,7) - 1, +props.data.validTime.slice(8,10)))
    return (
        <div className='list-item'>
            <div className="list-top">
                <div className='date'>
                    <p className="day">
                        {date.toString().split(" ")[0]}
                    </p>
                    <p className="date">
                        {props.data.validTime.slice(8, 10)+"/"+props.data.validTime.slice(5, 7)}
                    </p>
                </div>
                <div className="sm-info">
                    <p>{props.data.minTempC}°C/{props.data.maxTempC}°C</p>
                    <p>{props.data.weather}</p>
                </div>
                {isOpened ? <MdExpandLess style={{color: "#ccc", fontSize: "2rem", cursor: "pointer"}} /> : <MdExpandMore style={{color: "#ccc", fontSize: "2rem", cursor: "pointer"}} />}
            </div>
            <div className={`list-bottom ${isOpened ? "visible" : "not-visible"}`}>
                <div className="info">
                        <WiStrongWind />
                        <p>Wind Speed</p>
                        <p>{(props.data.windSpeedMinKPH)}KPH/{props.data.windSpeedMaxKPH}KPH</p>
                </div>
                <div className="info">
                        <WiBarometer />
                        <p>Pressure</p>
                        <p>{(props.data.pressureMB)}MB</p>
                </div>
                <div className="info">
                        <AiFillEye />
                        <p>Visibility</p>
                        <p>{(props.data.visibilityKM)}KM</p>
                </div>
                <div className="info">
                        <ImDroplet />
                        <p>Humidity</p>
                        <p>{(props.data.minHumidity)}%/{props.data.maxHumidity}%</p>
                </div>
                <div className="info">
                        <TbSunrise />
                        <p>Sunrise</p>
                        <p>{(props.data.sunriseISO.slice(11,19))}</p>
                </div>
                <div className="info">
                        <TbSunset />
                        <p>Sunset</p>
                        <p>{(props.data.sunsetISO.slice(11,19))}</p>
                </div>
            </div>
        </div>
    )
}

