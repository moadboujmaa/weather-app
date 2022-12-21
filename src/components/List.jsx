import React from 'react'
import ListItem from './ListItem'
import { nanoid } from 'nanoid'

export default function List(props) {
    return (
        <div className='data-list'>
            {props.data.map(item => {
                let id = nanoid()
                return <ListItem key={id} data={item}/>
            })}
        </div>
    )
}
