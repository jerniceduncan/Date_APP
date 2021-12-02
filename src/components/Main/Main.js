import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: #ffffff;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
 
`;
const Button = styled.button`
border-radius: 50%;
border: none;
background-color: #4EA3B8;
color: white;
font-size:30px;
padding: 20px;
margin:20px;
&:hover{
    background-color: #C9F299
}

`


const Main = () => {
  return (
    <div>
      <Container>
        <ButtonGroup>
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Main;
