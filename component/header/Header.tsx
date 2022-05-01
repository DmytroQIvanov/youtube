import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import YoutubeLogo from "../../public/YoutubeLogo.svg";
import { useRouter } from "next/router";
import Input from "../Input/Input";
import Link from "next/link";
import SideBar from "../SideBar/SideBar";

import { useDispatch, useSelector } from "react-redux";
import defaultUserIMG from "/public/defaultProfile.png";
import sendVideoImg from "/public/sendVideo.svg";
import { fetchUserThunk } from "../../Store/features/user";

const Header: React.FC<{
  sidebarPart?: boolean;
  setSidebar: Function;
  sidebarState: boolean;
  aside?: boolean;
}> = ({ sidebarPart, sidebarState, setSidebar, aside }) => {
  const router = useRouter();
  const pushHome = () => {
    router.push({ href: "/", pathname: "/" });
  };

  const dispatch = useDispatch();
  const user: any = useSelector((store: any) => store.user.user);
  const status = useSelector((store: any) => store.user.status);
  return (
    <header className={styles.header}>
      <div
        className={styles.header__burgerContainer}
        onClick={() => setSidebar(!sidebarState)}
      >
        <div className={styles.header__burger} />
      </div>
      <div className={styles.header__logo} onClick={pushHome}>
        <Image src={YoutubeLogo} />
        <span className={styles.header__logoLanguage}>UA</span>
      </div>
      {!sidebarPart && (
        <>
          <div className={styles.header__input}>
            <Input placeholder={"Search"} img />
          </div>
          {!user.email ? (
            !status.loading && status.firstFetch ? (
              <div className={styles.header__signIn}>
                <Link href={"/sign-in"}>SIGN IN</Link>
              </div>
            ) : (
              <></>
            )
          ) : (
            <div className={styles.header__profileContainer}>
              <div
                className={`${styles.header__profileContainerImg} ${styles.header__profileContainerBorderR}`}
              >
                <Link href={"/channel"}>
                  <Image src={defaultUserIMG} height={30} width={30} />
                </Link>
              </div>
              <div className={styles.header__profileContainerImg}>
                <Link href={"/add-video"}>
                  <Image src={sendVideoImg} height={30} width={30} />
                </Link>
              </div>
            </div>
          )}
          {!aside && (
            <SideBar
              active={sidebarState}
              onClick={() => setSidebar(!sidebarState)}
            />
          )}
        </>
      )}
    </header>
  );
};

export default Header;
