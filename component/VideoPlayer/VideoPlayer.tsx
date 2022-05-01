import React, {useRef, useState} from 'react';
import styles from './VideoPlayer.module.scss'


const VideoPlayer:React.FC<{url: string }> = ({url}) => {

    const [state,setState]=useState(false)
    const refd =useRef(null)
    const onHandlePlay=()=>{
        console.log(refd)
        if(state){
            refd.current.pause()
        }else {
            refd.current.play()

        }
        setState(!state)
    }
    return (
        <div className={styles.videoPlayer}>
            <button onClick={onHandlePlay} className={styles.videoPlayer_playBtn}>{!state?'play':'stop'}</button>
            <video width="80%"  preload="auto"  src={url} ref={refd}>
                {/*<source type="video/mp4" />*/}
                {/*Your browser does not support HTML5 video.*/}
            </video>
        </div>
    );
};

export default VideoPlayer;