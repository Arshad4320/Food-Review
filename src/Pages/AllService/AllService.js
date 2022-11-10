import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import ServiceItem from './ServiceItem';
import useTitle from '../../Hooks/UseTitle';

const AllService = () => {
    const allFood = useLoaderData();
    useTitle('Foods')
    return (
        <div className='my-20'>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 '>
                {
                    allFood.map(item => <ServiceItem key={item._id} item={item}></ServiceItem>)

                }
            </div>
        </div>
    );
};

export default AllService;