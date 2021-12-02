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
const Button = styled.button`
border: none;
padding: 20px;
background-color: #17a2b8;
color: white;
font-size: 15px;
margin: 30px;
&:hover {
  background-color: #c9f299;
}


`
const Nav = () => {
  return (
    <div>
      <Navigation>Vibez
        <Button>Sign Up</Button>
        <Button>Sign In</Button>
      </Navigation>
      
    </div>
  );
};

export default Nav;
