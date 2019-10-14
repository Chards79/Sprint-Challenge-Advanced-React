import React from 'react';

function PlayerCard(props) {
    console.log(props);
    const { women: { name, country, searches } } = props
    return (
        <div className="card">
            <h2>{name}</h2>
            <div className="card-info">
                <p>{`Country: ${country}`}</p>
                <p>{`Number of Searches: ${searches}`}</p>
            </div>
        </div>
    )
}

export default PlayerCard;