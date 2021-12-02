import styled from "styled-components";

const Navigation = styled.div`
  height: 75px;
  width: 100%;
  background-color: #17a2b8;
  box-shadow: 10px #888888;
  display: flex;
  align-content: flex-end;
  color: #C9F299;
  font-size: 40px;

`;
const Nav = () => {
  return (
    <div>
      <Navigation>Vibez</Navigation>
    </div>
  );
};

export default Nav;
