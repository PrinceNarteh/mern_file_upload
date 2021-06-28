import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import SingleImages from "../components/SingleImages";
import styled from "styled-components";
import GMB from "../assets/gmb.jpg";

const images = [GMB, GMB, GMB];

function App() {
  const [profile, setProfile] = useState("");
  const [image, setImage] = useState("");

  const fetchImage = async (url) => {
    const { data } = axios.get(url);
    setImage(data);
  };

  const handleChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profile", profile);

    const { data } = await axios.post("http://localhost:4000/upload", formData);
    fetchImage(data);
  };

  console.log(image);

  return (
    <StyledHome>
      <h1>Single & Multiple File Upload Using MERN Stack</h1>

      <SingleImages title="Single Images" images={images} />
      <SingleImages title="Single Images" images={images} />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 90%;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 3rem;
  }
`;

export default App;
