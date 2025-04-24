import React from "react";
import { useNavigate } from "react-router";

export const ShipCard = (props) => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/shipDetails'+props.uid)
    }

    return(
        <div className="col-sm6 col-md-4 col-lg-3">

        <div className="card">
            <figure>
                <img className="card-img-top" src={props.img} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>
            <div className="d-flex">
                <button className="btn btn-primary" onClick={handleClick}>Learn More</button>
                <button className="btn btn-ligth">Corazón</button>
            </div>
            </div>
        </div>
    )
}
