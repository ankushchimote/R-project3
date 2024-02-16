import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import { Button } from "../styled/Button"
import { OutlineButton } from "../styled/Button"
import Rules from "./Rules"


const GamePlay = () => {
    const [score,setScore] = useState(0) //this use to change score by comparing dice and number
    const [selectedNumber, setSelectedNumber] = useState() //to use hook of other component we brought their hooks(which is on left side) and then we passed the props 
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] =useState("")
    const[showRules,setShowRules] =useState(false);


    const generateRandomNumber = (min,max) => {
        // console.log(Math.floor(Math.random() *(max-min)+min));
         return Math.floor(Math.random() *(max-min)+min)
     }
     
     const roleDice = () => {
         if(!selectedNumber) {
            setError("Plz Select Number first")
            return
         }
         setError('')
         const randomNumber =generateRandomNumber(1,7)
         setCurrentDice((prev) => randomNumber)
 


         if (selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
         } else {
            setScore((prev) => prev -2)
         }

         setSelectedNumber(undefined); //we did this to un select the number after comparing
     }

     const resetScore = () =>{
        setScore(0)
     }


  return (
    <MainContainer>
      <div className="top_section">
       <TotalScore
       score={score}
       />
       <NumberSelector
       error={error}
       setError={setError}
       selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}
       />
      </div>
      <RoleDice
      currentDice={currentDice}
      roleDice={roleDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        gap: 10px;
    }
`