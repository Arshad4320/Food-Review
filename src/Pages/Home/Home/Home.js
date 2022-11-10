import React from 'react';
import useTitle from '../../../Hooks/UseTitle';

import About from '../AboutPage/About';

import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import SpacialItem from '../SpacilaItem/SpacialItem';



const Home = () => {
    useTitle('Home')
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