import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { Game } from '../GameBoardConstructor'

export default function Grid(props) {
    // eslint-disable-next-line
    const { rows, columns, setRatio } = props;
    
    // eslint-disable-next-line
    const [ gameClass, setGameClass ] = useState(new Game(rows, columns));
    // eslint-disable-next-line
    const [ matrix, setMatrix ] = useState([]);
    // eslint-disable-next-line
    const [ boardWidth, setBoardWidth ] = useState(0);
    const [ update, setUpdate ] = useState(false);

    const [ started, setStarted ] = useState(false);

    useEffect(() => {
        setGameClass(new Game(rows, columns));
    }, [rows, columns])
    
    const rowDiv = useRef();

    useEffect(() => {
        const handleResize = () => {
            setUpdate(!update);
        }

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
    }, [])

    useLayoutEffect(() => {
        const dim = rowDiv.current.getBoundingClientRect()
        const height = dim.height;
        const width = dim.width;
        const ratio = Math.floor(width / height);

        setRatio(ratio);
        console.log(Math.min(dim.width, dim.height))
        setBoardWidth(Math.min(dim.width, dim.height));
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowDiv.current, update]);

    
    const randomFill = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const random = Math.random();
                if (random > .9) {
                    gameClass.toggleSquare(i, j);
                }
            }
        }
        setMatrix(gameClass.board);
        setUpdate(!update);
    }

    useEffect(() => {
        setMatrix(gameClass.board);
    }, [gameClass.board, update])

    const squareFace = boardWidth / (matrix.length || 1);

    const handleClickSquare = (i, j) => {
        gameClass.toggleSquare(i, j);
        setUpdate(!update);
    }

    const nextTic = () => {
        gameClass.nextMove();
        setUpdate(!update);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (started) {
                nextTic()
            }
        }, 500);
        
        return () => clearInterval(interval);
    })



    return (
        <div className='game'>
            <button className='btn btn-success' onClick={() => setStarted(true)}>Start</button>
            <button className='btn btn-info' onClick={nextTic}>Next</button>
            <button className='btn btn-danger' onClick={() => setStarted(false)}>Stop</button>
            <button className='btn btn-dark' onClick={randomFill}>Random</button>
            <div ref={rowDiv} className='gridContainer m-0' style={{height: '90vh', width: '95vw'}}>
                {
                    matrix.map((row, i) => <div key={`row${i}`} className='row d-flex justify-content-center flex-nowrap' >
                    {/* matrix.map((row, i) => <div key={`row${i}`} className='row' > */}
                            {
                                row.map((square, j) => 
                                    // <div key={`col${j}`} onClick={() => handleClickSquare(i, j)} className='d-flex justify-content-center flex-nowrap'>
                                    <div key={`col${j}`} onClick={() => handleClickSquare(i, j)} className={square ? 'filled' : 'blank'} style={{height: `${squareFace}px`, width: `${squareFace}px`}}>
                                        {/* <span className={square ? 'filled' : 'blank'} style={{height: `${squareFace}px`, width: `${squareFace}px`}}></span> */}
                                    </div>)
                            }
                        </div>)
                }
            </div>
        </div>
    )
}