import styled from "styled-components";
import "./Main.css";
import  SignUp  from "./../SignUp/SignUp";

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
  border-radius: 50%;
  border: none;
  background-color: #4ea3b8;
  color: white;
  font-size: 30px;
  padding: 20px;
  margin: 20px;
  &:hover {
    background-color: #c9f299;
  }
`;

const Main = () => {
  return (
    <div>
      <Container>
        <div className="center">
          <ButtonGroup>
            {" "}
            Find Love Today
            <Button onClick={SignUp}>Sign Up</Button>
            <Button>Sign In</Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default Main;
