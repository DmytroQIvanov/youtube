import React, { useEffect, useState } from "react";
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";
import styles from "../component/VideoPreviewContainer/VideoPreviewContainer.module.scss";
import VideoPreviewBlock from "../component/VideoPreviewBlock/VideoPreviewBlock";
import axios from "axios";
import VideoPreviewContainer from "../component/VideoPreviewContainer/VideoPreviewContainer";

export async function getStaticProps() {
  const data = await axios.get(`http://localhost:8080/user/videos`);

  return {
    props: { data: data.data }, // will be passed to the page component as props
  };
}
const Favourites = (props) => {
  console.log(props.data);
  return (
    <WrapperComponent title={"Favourites"} header footer aside>
      <div>
        <div className={styles.container}>
          <VideoPreviewContainer data={props.data} />
          {/*{props.data.map((elem, index) => (*/}
          {/*  <VideoPreviewBlock data={elem} />*/}
          {/*))}*/}
        </div>
      </div>
    </WrapperComponent>
  );
};

export default Favourites;
