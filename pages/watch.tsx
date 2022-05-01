import React, {useEffect, useState} from 'react';
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";
import WatchPage from "../component/WatchPage/WatchPage";

const Watch = () => {
    return (
        <WrapperComponent title={'Watch'} header >
            <WatchPage/>
        </WrapperComponent>
    );
};

export default Watch;