import styled from "styled-components";

const ImageCard = ({ image, ...props }) => {
  return (
    <StyledImageCard {...props}>
      <img src={image} alt="" />
    </StyledImageCard>
  );
};

const StyledImageCard = styled.div`
  width: 30rem;
  border-radius: 1rem;
  overflow: hidden;
  flex-grow: ${({ grow }) => grow && 1};

  img {
    width: 100%;
  }
`;

export default ImageCard;
