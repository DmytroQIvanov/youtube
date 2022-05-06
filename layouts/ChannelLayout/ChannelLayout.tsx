import React, { useEffect } from "react";
import Image from "next/image";
import defaultChannelIMG from "/public/channelImg.jpg";
import { useRouter } from "next/router";
import styles from "./ChannelLayout.module.scss";
import { useChannelLayoutController } from "./ChannelLayout.controller";

const ChannelLayout = () => {
  const router = useRouter();
  return (
    <div className={styles.channelLayout}>
      <div>
        <div className={styles.channelLayout_img}>
          <Image src={defaultChannelIMG} alt={"Channel Image"} />
        </div>
      </div>
    </div>
  );
};

export default ChannelLayout;
