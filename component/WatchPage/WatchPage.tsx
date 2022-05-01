import React, {useEffect, useState} from 'react';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import axios from "axios";
import styles from './WatchPage.module.scss'

const WatchPage = () => {

    const [state,setState] =useState('')
    useEffect(()=>{
        axios.get('http://localhost:8080/').then(elem=>setState(elem.data.url))
    })
    return (
        <div className={styles.watchPage}>
            <div  className={styles.watchPage_video}>
                <VideoPlayer url={state}/>
            </div>
        </div>
    );
};

export default WatchPage;