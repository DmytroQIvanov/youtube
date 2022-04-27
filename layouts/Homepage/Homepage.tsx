import React from 'react';
import WrapperComponent from "../../component/WrapperComponent/WrapperComponent";
import VideoPreviewContainer from "../../component/VideoPreviewContainer/VideoPreviewContainer";

const Homepage = () => {
    return (
        <WrapperComponent title={'Home'} header footer aside >
        <div>
            <VideoPreviewContainer/>
        </div>
        </WrapperComponent>
    );
};

export default Homepage;