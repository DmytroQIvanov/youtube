import React, { useState } from "react";
import axios from "axios";
import Input from "../../component/Input/Input";

const UploadVideoLayout = () => {
  const [video, setVideo] = useState<File | null>(null);
  const onFileChange = (event) => {
    // Update the state
    setVideo(event.target.files[0]);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onFileUpload = () => {
    if (!video) return;
    const formData = new FormData();
    formData.append("file", video, video.name);
    formData.append("title", title);
    formData.append("description", description);

    // Details of the uploaded file
    console.log(video);

    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8080/user/uploadVideo", formData, {
      withCredentials: true,
    });
  };

  return (
    <div>
      <input type={"file"} onChange={onFileChange} />
      <Input onChange={(text) => setTitle(text)} />
      <Input onChange={(text) => setDescription(text)} />
      <button onClick={() => onFileUpload()}>Send</button>
    </div>
  );
};

export default UploadVideoLayout;
