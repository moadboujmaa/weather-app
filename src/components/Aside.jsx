import React from 'react'
import Form from './Form'
import { GoAlert } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import List from './List';


export default function Aside(props) {
    const isSuccess = (weather) => {
        if (weather.length === 0) {
            return <div className="msg-warning">
                    <AiFillInfoCircle style={{color: "#ffcd16"}}/>
                    <p>No Data Available, Try To Choose A City</p>
                </div>
        } else {
            if (!weather.success) {
                return <div className="msg-error">
                    <GoAlert style={{color: "#ee2506"}} />
                    <p>{weather.error.description}</p>
                </div>
            } else {
                return (
                    <List data={weather.response[0].periods} />
                )
            }
        }
    }
    return (
        <aside>
            <Form submit={props.submit} change={props.change}/>
            {isSuccess(props.weather)}
        </aside>
    )
}
