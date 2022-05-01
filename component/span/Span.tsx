import React from "react";
import Link from "next/link";
import styles from './Span.module.scss'

type spanProps = {
  text: string;
  type?: "blue" | "smooth";
  link?: string;
};
const Span: React.FC<spanProps> = ({ link, type='default', text }) => {
  return (
    <div className={styles[type]}>
      <span>
        {link?<Link href={link}>{text}</Link>:text}
      </span>
    </div>
  );
};

export default Span;
