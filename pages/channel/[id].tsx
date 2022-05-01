import React from 'react';
import WrapperComponent from "../../component/WrapperComponent/WrapperComponent";
import {useRouter} from "next/router";
import Image from "next/image";
import ChannelLayout from "../../layouts/ChannelLayout/ChannelLayout";

const Channel = () => {

    return (
        <WrapperComponent title={'Channel'} aside header>
        <ChannelLayout/>
        </WrapperComponent>
    );
};

    export default Channel;