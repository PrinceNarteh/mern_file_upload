import { useState } from "react";
import { singleFileUpload } from "../data/api";

const SingleFileUpload = () => {
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("profile", file);
    await singleFileUpload(file);
  };

  return (
    <div>
      <h1>Single File Upload</h1>
      <div>
        <label htmlFor="">Single Upload</label>
        <input type="file" name="profile" onChange={handleChange} />
        <button type="button" onClick={() => handleSubmit()}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default SingleFileUpload;
