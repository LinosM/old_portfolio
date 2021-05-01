import React from "react";
import './style.css';

function Card(props) {
    return (
        <div className="card" style={{maxHeight: "700px", maxWidth: "800px"}}>
            <img src={props.img} className="card-img-top border border-dark rounded" alt={props.name} />
                <div className="card-body">
                    <p className="card-text">
                        <h2>{props.name}</h2>

                        {props.demo ? <div><a href={props.demo} target="_blank">Demo</a> <br /></div> : ""}
                        <a href={props.git} className="pb-3" target="_blank">GitHub</a>
                    </p>
                </div>
        </div>
    )
}

export default Card;