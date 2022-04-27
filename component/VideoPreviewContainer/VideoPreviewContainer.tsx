import React from "react";
import styles from "./VideoPreviewContainer.module.scss";
import VideoPreviewBlock from "../VideoPreviewBlock/VideoPreviewBlock";
import { IVideoPreview } from "../../Interfaces/IVideo";
import previewImage from "../../public/pexels-anjana-c-674010.jpg";
import previewImage2 from "../../public/pexels-julius-silver-870711.jpg";

const testArray: IVideoPreview[] = [
  {
    previewImage,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
  {
      previewImage:previewImage2,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
  {
    previewImage,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
  {
      previewImage: previewImage2,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
  {
      previewImage: previewImage2,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
  {
    previewImage,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
    {
        previewImage,
        title: "Test text ",
        views: "45k",
        createdData: "5 days ago",
    },
    {
        previewImage,
        title: "Test text ",
        views: "45k",
        createdData: "5 days ago",
    },
    {
        previewImage,
        title: "Test text ",
        views: "45k",
        createdData: "5 days ago",
    },
    {
        previewImage,
        title: "Test text ",
        views: "45k",
        createdData: "5 days ago",
    },
    {
        previewImage,
        title: "Test text ",
        views: "45k",
        createdData: "5 days ago",
    },
  {
    previewImage,
    title: "Test text ",
    views: "45k",
    createdData: "5 days ago",
  },
];

const VideoPreviewContainer = () => {
  return (
    <div className={styles.container}>
      {testArray.map((elem, index) => (
        <VideoPreviewBlock data={elem} />
      ))}
    </div>
  );
};

export default VideoPreviewContainer;
