import React from 'react'
import BetLogic from './BetLogic'

function Player2({M,HC}) {
  return (
    <div>
        <h1>Mia's Bet: ${M}</h1>
        <button onClick={HC}>Bet++</button>
    </div>
  )
}

export default BetLogic(Player2)