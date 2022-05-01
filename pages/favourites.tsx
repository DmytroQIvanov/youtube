import React from 'react';
import WrapperComponent from "../component/WrapperComponent/WrapperComponent";

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}
const Favourites = () => {
    return (
        <WrapperComponent title={'Favourites'} header footer aside >
        <div>
            
        </div>
        </WrapperComponent>
    );
};


export default Favourites;