import { useState } from "react";
import { singleFileUpload } from "../data/api";
import styled from "styled-components";
import { Button, Heading } from "../styles";
import ImageCard from "../components/ImageCard";
import GMB from "../assets/gmb.jpg";

const SingleFileUpload = () => {
  const [file, setFile] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("profile", file);
    await singleFileUpload(file);
  };

  return (
    <StyledSingleFileUpload>
      <Heading>Single File Upload</Heading>
      <div className="form">
        <input type="file" name="profile" onChange={handleChange} />
        <Button type="button" onClick={() => handleSubmit()}>
          Upload
        </Button>
      </div>
      <ImageCard image={GMB} />
    </StyledSingleFileUpload>
  );
};

const StyledSingleFileUpload = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .form {
    margin-bottom: 2rem;
  }

  input {
    margin: 3rem 0;
    font-size: 1.6rem;
  }

  h1 {
    font-size: 3rem;
  }
`;

export default SingleFileUpload;
