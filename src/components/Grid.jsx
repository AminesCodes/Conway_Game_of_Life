import React, { useState, useEffect } from 'react';

import { Game } from '../GameBoardConstructor'

export default function Grid(props) {
    // eslint-disable-next-line
    const { rows, columns, game, setGame } = props;
    
    // eslint-disable-next-line
    const [ gameGrid, setGameGrid ] = useState(new Game(rows, columns))
    
    
    useEffect(() => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const random = Math.random();
                if (random > .5) {
                    gameGrid.fill(i, j);
                }
            }
        }
        console.log(gameGrid)
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            hi
        </div>
    )
}