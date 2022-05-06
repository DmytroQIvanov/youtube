import React, { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import axios from "axios";
import styles from "./WatchPage.module.scss";
import { useRouter } from "next/router";

const WatchPage = () => {
  const router = useRouter();
  const [state, setState] = useState("");

  console.log(router.query.id);

  useEffect(() => {
    router.query.id &&
      axios
        .get(`http://localhost:8080/user/video/${router.query.id}`)
        .then((elem) => {
          setState(elem.data);
        });
  }, [router.query.id]);
  return (
    <div className={styles.watchPage}>
      <div className={styles.watchPage_video}>
        <VideoPlayer url={state} />
      </div>
    </div>
  );
};

export default WatchPage;
