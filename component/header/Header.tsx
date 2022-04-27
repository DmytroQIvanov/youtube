import React from 'react';
import Image from "next/image";
import styles from './Header.module.scss'
import YoutubeLogo from '../../public/YoutubeLogo.svg'
import {useRouter} from "next/router";
import Input from "../Input/Input";
import Link from "next/link"


const Header = () => {

    const router = useRouter();
    const pushHome =()=>{
        router.push({href:'/smth',pathname:"/"});
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__burgerContainer}>
                <div className={styles.header__burger}/>
            </div>
            <div className={styles.header__logo} onClick={pushHome}>
                <Image src={YoutubeLogo}/>
                <span className={styles.header__logoLanguage}>UA</span>
            </div>

            <div className={styles.header__input}>
            <Input placeholder={'Search'} img/>
            </div>
            <div className={styles.header__signIn}>
                <Link href={"/sign-in"} >SIGN IN</Link>
            </div>
        </header>
    );
};

export default Header;