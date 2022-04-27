import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import YoutubeLogo from "../../public/YoutubeLogo.svg";
import { useRouter } from "next/router";
import Input from "../Input/Input";
import Link from "next/link";
import SideBar from "../SideBar/SideBar";

const Header: React.FC<{
  sidebarPart?: boolean;
  setSidebar: Function;
  sidebarState: boolean;
    aside?:boolean;
}> = ({ sidebarPart, sidebarState, setSidebar ,aside}) => {
  const router = useRouter();
  const pushHome = () => {
    router.push({ href: "/smth", pathname: "/" });
  };

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
          <div className={styles.header__signIn}>
            <Link href={"/sign-in"}>SIGN IN</Link>
          </div>
            {!aside&&
            <SideBar
            active={sidebarState}
            onClick={() => setSidebar(!sidebarState)}
          />}
        </>
      )}
    </header>
  );
};

export default Header;
