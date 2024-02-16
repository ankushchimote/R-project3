import { useState } from "react"
import styled from "styled-components"


const RoleDice = ({currentDice,roleDice}) => {

    



  return (
    <DiceContainer>
        <div
         onClick={roleDice}
         className="dice">
            <img src={`/dices/d${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer= styled.div`
   margin-top: 48px;
   display: flex;
   flex-direction: column;
   align-items: center;

   .dice{
    cursor: pointer;
   }

   p{
    font-size: 24px;
   }

`