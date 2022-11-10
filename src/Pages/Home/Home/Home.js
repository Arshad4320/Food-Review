import React from 'react';

import About from '../AboutPage/About';

import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import SpacialItem from '../SpacilaItem/SpacialItem';



const Home = () => {
    return (
        <div >
            <Banner ></Banner>
            <Service></Service>
            <About></About>
            <SpacialItem></SpacialItem>
        </div>
    );
};

export default Home;