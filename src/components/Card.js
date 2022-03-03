import React from "react"

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online" && props.openSpots > 0) {
        badgeText = "ONLINE"
    }

    return (
        <div className="card-div">
            <img src={window.location.origin + `/images/${props.img}`} className="card-image" alt=""/>
            {badgeText && <div className="badge-text">{badgeText}</div>} 
            <div className="card">
                <div className="card-stats">
                <img src={window.location.origin + '/images/star.png'} className="star" alt=""/>
                    <span className="rating">{props.stats.rating}</span>
                    <span className="grey">({props.stats.reviews}) • </span>
                    <span className="location">{props.location}</span>
                </div>
                <p className="intro">{props.intro}</p>
                <p className="price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card

