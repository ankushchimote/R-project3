///in this project we using "styled-component" css framework
/// vscode styled-component extension is optional
//// to use it we import styled-component and then see at the bottom const Button=styled.button` `




import styled from "styled-components"
import { Button } from "../styled/Button"

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
          <img src="/dice.jpg" alt="" />
        </div>
        
        <div className="content">
            <h1>
                DICE GAME
            </h1>
            <Button
            onClick={toggle}
            >
                PLAY NOW
            </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    .content{
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;
