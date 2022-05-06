import React from "react";
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";
import UploadVideoLayout from "../layouts/uploadVideo/UploadVideoLayout";

const UploadVideo = () => {
  return (
    <WrapperComponent title={"Upload video"} authorization>
      <div>
        <UploadVideoLayout />
      </div>
    </WrapperComponent>
  );
};

export default UploadVideo;
