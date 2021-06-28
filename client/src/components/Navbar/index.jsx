import styled from "styled-components";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <NavItems />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 710px) {
    padding: 0 50px;
  }
`;

export default Navbar;
