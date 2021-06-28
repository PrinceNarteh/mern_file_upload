import styled from "styled-components";
import Image from "../../assets/upload.png";

const Logo = () => {
  return (
    <StyledLogo>
      <img src={Image} alt="Logo" />
      <h3>FileUpload</h3>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 2rem;
    margin-left: 1rem;
  }

  img {
    height: 30px;
    width: 30px;
  }
`;

export default Logo;
