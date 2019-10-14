import React from 'react';
import PlayerCard from './PlayerCard';

function MappedCards({ players }) {
    return (
        <div className="players">
            {players.map(women =>
                <PlayerCard women={women} />
            )}
        </div>
    )
}

export default MappedCards;