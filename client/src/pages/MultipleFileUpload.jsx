import { useState } from "react";
import { multipleFileUpload } from "../data/api";

const MultipleFileUpload = () => {
  const [state, setState] = useState({
    title: "",
    gallery: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "gallery") {
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files,
      }));
    } else {
      console.log("Files");
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  console.log(state);

  const handleSubmit = async () => {
    console.log(state);
    // const formData = new FormData();
    // formData.append("gallery", state);
    // await multipleFileUpload(formData);
  };

  return (
    <div>
      <h1>Multiple File Upload</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="file"
          name="gallery"
          onChange={(e) => handleChange(e)}
          multiple
        />
        <button type="button" onClick={() => handleSubmit()}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default MultipleFileUpload;
