import styled from "styled-components";

const Navigation = styled.div`
  height: 75px;
  width: 100%;
  background-color: blue;
  box-shadow: 20px #888888;
`;
const Nav = () => {
  return (
    <div>
      <Navigation></Navigation>
    </div>
  );
};

export default Nav;
