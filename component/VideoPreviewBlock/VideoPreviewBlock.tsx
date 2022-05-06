import React from "react";
import styles from "./VideoPreviewBlock.module.scss";
import { IVideoPreview } from "../../Interfaces/IVideo";
import Image from "next/image";
import { useRouter } from "next/router";

const VideoPreviewBlock: React.FC<{ data: IVideoPreview }> = ({
  data: { previewImage, views, title, createdData, id },
}) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/watch/${id}`);
  };
  return (
    <div className={styles.videoPreviewBlock}>
      <div
        className={styles.videoPreviewBlock__image}
        onClick={() => handleClick(id)}
      >
        {previewImage && <Image src={previewImage} placeholder={"blur"} />}
      </div>
      <h1 className={styles.videoPreviewBlock__title}>{title}</h1>
      <div>
        <span>{views}</span>
        <span>{createdData}</span>
      </div>
    </div>
  );
};

export default VideoPreviewBlock;
