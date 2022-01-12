import styled from "styled-components";
import "./Main.css";
import SignUp from "./../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";


const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9cbfa7;
  height: 20%;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: #4ea3b8;
  color: white;
  font-size: 30px;
  padding: 20px;
  margin: 15px;
  &:hover {
    background-color: #c9f299;
  }
`;
const divStyles ={
  display: "flex", 
  alignContent: "center",
  color: "white"
}

const Main = () => {
  return (
    <div>
      <Container>
        <div className="center">
          <ButtonGroup>
            {" "}
            <h1 style={divStyles}>
              Find Love Today
            </h1>
            <Button onClick={SignUp}>Sign Up</Button>
            <Button onClick={SignIn}>Sign In</Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default Main;
