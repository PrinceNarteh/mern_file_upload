import styled from "styled-components";
import ImageCard from "./ImageCard";

const SingleImages = ({ title, images }) => {
  return (
    <StyledSingleImages>
      <h3>{title}</h3>
      <div className="images">
        {images &&
          images.map((image, idx) => (
            <ImageCard key={idx} image={image} grow />
          ))}
      </div>
    </StyledSingleImages>
  );
};

const StyledSingleImages = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #349adb;
  }
  .images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
`;

export default SingleImages;
