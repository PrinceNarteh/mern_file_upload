import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <StyledNavItem>
      <Link to={to}>{label}</Link>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  font-size: 1.5rem;
  list-style: none;
  padding: 10px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #349adb;
  }
`;

export default NavItem;
