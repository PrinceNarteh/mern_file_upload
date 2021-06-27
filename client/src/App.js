import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SingleFileUpload from "./pages/SingleFileUpload";
import MultipleFileUpload from "./pages/MultipleFileUpload";

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
    <div className="App">
      <h1>Single & Multiple File Upload Using MERN Stack</h1>
      <SingleFileUpload />
      <MultipleFileUpload />
    </div>
  );
}

export default App;
