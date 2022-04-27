import Head from "next/head";
import React, {ReactNode, useState} from "react";
import Header from "../header/Header";
import AsideNavigation from "../asideNavigation/asideNavigation";
// import NavigationBar from "../navigationBar/NavigationBar";
// import Footer from "../footer/Footer";
import styles from "./WrapperComponent.module.scss";

type Props = {
  children: ReactNode;
  title: string;
  aside?: boolean;
  footer?: boolean;
  header?: boolean;
};

const WrapperComponent: React.FC<Props> = ({
  children,
  title,
  footer,
  header,
  aside,
}) => {
    const [sideBar,setSidebar]= useState(false);
  return (
    <div>
      <Head>
        {title}
        {/*  <meta name="description" content="Generated by create next app" />*/}
        {/*  <link rel="icon" href="/favicon.ico" />*/}
      </Head>
      {header && <Header setSidebar={setSidebar} sidebarState={sideBar} aside={aside}/>}
      <div className={`${aside ? (!sideBar? styles.mainContent_aside_active: styles.mainContent_aside_unactive) : styles.mainContent} ${styles.mainContent_aside}`}>
        {aside && <AsideNavigation active={!sideBar}/>}
        {children}
      </div>
    </div>
  );
};

export default WrapperComponent;
