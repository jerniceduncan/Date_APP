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
  align-items: center;
`;
const Button = styled.button`
radius: 20px;
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
