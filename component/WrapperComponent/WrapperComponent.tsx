import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "../header/Header";
import AsideNavigation from "../asideNavigation/asideNavigation";
// import NavigationBar from "../navigationBar/NavigationBar";
// import Footer from "../footer/Footer";
import styles from "./WrapperComponent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../../Store/features/user";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
  title: string;
  aside?: boolean;
  footer?: boolean;
  header?: boolean;
  authorization?: boolean;
};

const WrapperComponent: React.FC<Props> = ({
  children,
  title,
  footer,
  header,
  aside,
  authorization = false,
}) => {
  const router = useRouter();
  const status = useSelector((state: any) => state.user.status);
  const [sideBar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserThunk());
  }, []);

  useEffect(() => {
    !status.user &&
      !status.loading &&
      status.firstFetch &&
      authorization &&
      router.push("/");
  }, [status.loading, status.user]);
  return (
    <div>
      <Head>
        {title}
        {/*  <meta name="description" content="Generated by create next app" />*/}
        {/*  <link rel="icon" href="/favicon.ico" />*/}
      </Head>
      {header && (
        <Header setSidebar={setSidebar} sidebarState={sideBar} aside={aside} />
      )}
      <div
        className={`${
          aside
            ? !sideBar
              ? styles.mainContent_aside_active
              : styles.mainContent_aside_unactive
            : styles.mainContent
        } ${styles.mainContent_aside}`}
      >
        {aside && <AsideNavigation active={!sideBar} />}
        {children}
      </div>
    </div>
  );
};

export default WrapperComponent;
