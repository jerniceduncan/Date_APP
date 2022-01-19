import { useState } from "react";
import styled from "styled-components";
import "./Main.css";
import SignUp from "./../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Modal = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 100;
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

const divStyles = {
  display: "flex",
  alignContent: "center",
  color: "white",
};

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  return (
    <div>
      <Container>
        <div className="center">
          <ButtonGroup>
            {" "}
            <h1 style={divStyles}>Find Love Today</h1>
            <Button
              onClick={() => {
                setShowModal(!showModal);
                setModalType("signup");
              }}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                setShowModal(!showModal);
                setModalType("login");
              }}
            >
              Sign In
            </Button>
          </ButtonGroup>
        </div>
      </Container>

      {showModal ? (
        <Modal>{modalType === "signup" ? <SignUp /> : <SignIn />}</Modal>
      ) : null}
    </div>
  );
};

export default Main;
