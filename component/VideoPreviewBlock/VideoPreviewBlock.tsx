import React from "react";
import styles from "./VideoPreviewBlock.module.scss";
import { IVideoPreview } from "../../Interfaces/IVideo";
import Image from "next/image";
import {useRouter} from "next/router";

const VideoPreviewBlock: React.FC<{data:IVideoPreview}> = ({data:{
  previewImage,
  views,
  title,
  createdData,
}}) => {
    const router = useRouter()
    const handleClick =(id:string)=> {
        router.push(`/watch?id=${id}`);
    }
  return (
    <div className={styles.videoPreviewBlock}>
      <div className={styles.videoPreviewBlock__image} onClick={()=>handleClick(title)}>
        <Image src={previewImage} placeholder={'blur'}/>
      </div>
      <h1>{title}</h1>
      <div>
        <span>{views}</span>
        <span>{createdData}</span>
      </div>
    </div>
  );
};

export default VideoPreviewBlock;
