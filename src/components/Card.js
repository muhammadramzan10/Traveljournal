import React from "react"
import "./Card.css"

export default function Card(props){
    return (
        <div className="main-container">
            <img className="card-image" src={`img/${props.coverimg}`}alt="card" />

            <div className="sub-container">
                <div className="location">
                    <div>
                        <img src="img/pinicon.png" alt="location-icon" />
                        <p>{props.location}</p>
                    </div>
                    <p>View on Google Maps</p>
                </div>
                <h1>{props.specificLocation}</h1>

                <div className="info">
                    <p className="info-date">{props.date}</p>
                    <p className="info-para">{props.description}</p>
                </div>

            </div>


        </div>
    )
}