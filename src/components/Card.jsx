import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div id='one'>
            {
                props.data.map((item, index) => (
                    <div id='card' style={{
                        backgroundColor: item.status === 'success' ? 'green'
                            : item.status === 'warning' ? 'yellow'
                                : item.status === 'error' ? 'red'
                                    : 'white'
                    }}>
                        <img src={item.img} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.dis}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
