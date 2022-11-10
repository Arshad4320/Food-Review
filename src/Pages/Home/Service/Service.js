import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from './Services';

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allFood`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className='lg:text-5xl text-4xl text-center font-semibold text-orange-500 mb-5'>Food Service</h2>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 '>
                {
                    service.map(food => <Services key={food._id} service={food}></Services>)
                }
            </div>
            <div className='text-center m-5'>
                <Link to='/allService'><Button variant='warning'>See All Food Service</Button></Link>

            </div>
        </div>
    );
};

export default Service;