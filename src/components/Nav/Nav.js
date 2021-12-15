import styled from "styled-components";

const Navigation = styled.div`
  height: 75px;
  width: 100%;
  background-color: #17a2b8;
  box-shadow: 50px #C9F299;
  display: flex;
  color: #C9F299;
  font-size: 60px;
`;

const ButtonGroupNav = styled.div`
display: flex;
justify-content: end;


`
const Button = styled.button`
border: none;
padding: 20px;
background-color: transparent;
color: white;
font-size: 15px;
margin: 30px;
&:hover {
  color: #c9f299;
}


`
const Nav = () => {
  return (
    <div>
      <Navigation>Vibez
        <ButtonGroupNav>
        {/* <Button>Sign Up</Button>
        <Button>Sign In</Button> */} 
        </ButtonGroupNav>
      </Navigation>
      
    </div>
  );
};

export default Nav;
