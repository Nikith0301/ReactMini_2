import React, { useState,useEffect } from 'react'
import "./styles.css"
export default function TicTacToe() {

    const[squares,setSquares]=useState(Array(9).fill(""))
    const[xTurn,setxTurn]=useState(true)
    const[status,setStatus]=useState("");

function Square({onClick,value}){
return (
<button onClick={onClick} className='square'>
        {value}
    </button>
)
    
}

function getWinner(sqaures){
    const winning=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
      ];

for(let i=0;i<winning.length;i++){
const [x,y,z]=winning[i]
    if(squares[x] && squares[x]===squares[y]&& squares[x]===squares[z]){
        return squares[x]
    }
}
return 0

} 

useEffect(()=>{
    if(!getWinner(squares) && squares.every((item)=> item!=="")){
       
        setStatus("Its a Draw")
    }
    else if(getWinner(squares) !==null){
        setStatus(`And the winner is ${getWinner(squares)}`)
    }
    else{
        setStatus(`The next Player is ${xTurn?"X" :"O"}`)
    }
},[xTurn,squares])

function handleRestart(){
    setSquares(Array(9).fill(''))
    setxTurn(true)
}

function handleClick(i){

    let cpysquares=[...squares]
    if(getWinner(squares) ||cpysquares[i]){
        return 
    }
    cpysquares[i]= xTurn ? "X":"O";
    setxTurn(!xTurn)
    setSquares(cpysquares)
}



  return (
    <>
    <div className='tic-tac-toe-container'>

        <div className='row'>
            <Square value={squares[0]} onClick={()=>{handleClick(0)}}/>
            <Square value={squares[1]} onClick={()=>{handleClick(1)}}/>
            <Square value={squares[2]} onClick={()=>{handleClick(2)}}/>

        </div>
        <div className='row'>
            <Square value={squares[3]} onClick={()=>{handleClick(3)}}/>
            <Square value={squares[4]} onClick={()=>{handleClick(4)}}/>
            <Square value={squares[5]} onClick={()=>{handleClick(5)}}/>
        </div>

        <div className='row'>
        <Square value={squares[6]} onClick={()=>{handleClick(6)}}/>
        <Square value={squares[7]} onClick={()=>{handleClick(7)}}/>
        <Square value={squares[8]} onClick={()=>{handleClick(8)}}/>
        </div>
        <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
    
    
    
    </>
  )
}
