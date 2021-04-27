import React from "react";
import './style.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <p className="card-text">
                        <h2>{props.name}</h2>
                        <a href={props.demo}>Demo</a>
                        <br />
                        <a href={props.git}>GitHub</a>
                    </p>
                </div>
        </div>
    )
}

export default Card;