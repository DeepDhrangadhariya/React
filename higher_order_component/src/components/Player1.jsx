import React from 'react'
import BetLogic from './BetLogic'

function Player1({M,HC}) {
  return (
    <div>
        <h1>Deep's Bet : ${M}</h1>
        <button onClick={HC}>Bet++</button>
    </div>
  )
}

export default BetLogic(Player1)