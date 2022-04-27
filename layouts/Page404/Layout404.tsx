import React from "react";
import googlelogo from "/public/googlelogo.png";
import robot from "/public/robot.png";
import Image from "next/image";
import styles from "./page404.module.scss";
import {useRouter} from "next/router";

const Layout404 = () => {
    const router = useRouter()
    const redirectHome =()=>{

        router.push('/')
    }
  return (
    <div className={styles.page404}>
        <div className={styles.page404_container}>
      <div>
          <div className={styles.page404_googleImg} onClick={redirectHome}>
        <Image src={googlelogo} />
          </div>
        <div>
          <span>404.</span>That’s an error.<span></span>
        </div>
        <div>
          <span>The requested URL was not found on this server.</span>That’s all
          we know.<span></span>
        </div>
      </div>
      <div>
        <Image src={robot} />
      </div>
        </div>
    </div>
  );
};

export default Layout404;
