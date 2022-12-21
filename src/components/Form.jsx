import React from 'react'
import { BiSearchAlt } from "react-icons/bi"

export default function Form(props) {
    return (
        <form onSubmit={props.submit}>
            <input type="text" placeholder='Type City Name' onChange={props.change} />
            <button type="submit"><BiSearchAlt /></button>
        </form>
    )
}
