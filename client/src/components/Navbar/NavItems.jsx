import styled from "styled-components";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <StyledNavItems>
      <NavItem to="/" label="Home" />
      <NavItem to="/single" label="Single Upload" />
      <NavItem to="/multiple" label="Multiple Upload" />
    </StyledNavItems>
  );
};

const StyledNavItems = styled.ul`
  height: 60px;
  display: flex;
  align-items: center;
`;

export default NavItems;
