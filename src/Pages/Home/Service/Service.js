import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Services from './Services';

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allFood`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className='text-center'>Service</h2>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10'>
                {
                    service.map(food => <Services key={food._id} service={food}></Services>)
                }
            </div>
        </div>
    );
};

export default Service;