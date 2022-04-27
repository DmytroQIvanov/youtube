import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./asideNavigation.module.scss";
import { useRouter } from "next/router";

//Images
import homeImg from "/public/home.svg";
import favouritesImg from "/public/favourites.svg";
import historyImg from "/public/history.svg";
import trendingImg from "/public/trending.svg";

import gamesImg from "/public/games.svg";
import musicImg from "/public/music.svg";
import likedImg from "/public/liked.svg";

const firstLinks: linkType[] = [
  { image: homeImg, text: "Home", link: "/", authorization: false },
  {
    image: favouritesImg,
    text: "Favourites",
    link: "/favourites",
    authorization: true,
  },
  {
    image: trendingImg,
    text: "Trending",
    link: "/trending",
    authorization: false,
  },
  { image: historyImg, text: "History", link: "/history", authorization: true },
];

const secondLinks: linkType[] = [
  { image: gamesImg, text: "Games", link: "/games", authorization: false },
  { image: musicImg, text: "Music", link: "/music", authorization: false },
  { image: likedImg, text: "Liked video", link: "/liked", authorization: true },
];

type linkType = {
  image: string;
  text: string;
  link: string;
  authorization: boolean;
};

const LinksComponent: React.FC<{ links: linkType[] }> = ({ links }) => {
  return (
    <div className={styles.asideNavigation__linksContainer}>
      {links.map((elem, index) => (
        <LinkComponent
          key={index}
          image={elem.image}
          text={elem.text}
          link={elem.link}
          authorization={elem.authorization}
        />
      ))}
    </div>
  );
};

const LinkComponent: React.FC<linkType> = ({
  link,
  text,
  image,
  authorization,
}) => {
  const { pathname } = useRouter();
  // if (authorization) return <></>;
  return (
    <div
      className={`${styles.asideNavigation__link} ${
        pathname == link && styles.asideNavigation__link_active
      }`}
    >
      <div className={styles.asideNavigation__linkImg}>
        <Image src={image} />
      </div>
      <Link href={link}>{text}</Link>
    </div>
  );
};

const AsideNavigation = () => {
  return (
    <div className={styles.asideNavigation}>
      <LinksComponent links={firstLinks} />
      <LinksComponent links={secondLinks} />
    </div>
  );
};

export default AsideNavigation;
