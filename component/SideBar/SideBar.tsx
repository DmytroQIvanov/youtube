import React from "react";
import AsideNavigation from "../asideNavigation/asideNavigation";
import styles from "./SideBar.module.scss";
import Header from "../header/Header";

const SideBar: React.FC<{ active: boolean; onClick: Function }> = ({
  active,
  onClick,
}) => {
  return (
    <div>
      <div
        className={`${styles.sidebar} ${
          active ? styles.sidebar_active : styles.sidebar_unactive
        }`}
      >
        <div className={styles.sidebar_content}>
          <Header sidebarPart setSidebar={onClick} sidebarState={active}/>
          <div style={{ display: "grid" }}>
            <AsideNavigation />
          </div>
        </div>
      </div>
      <div
        className={` ${styles.sidebar_modal} ${
          active ? styles.sidebar_modal_active : styles.sidebar_modal_unactive
        }`}
        onClick={() => onClick()}
      />
    </div>
  );
};

export default SideBar;
