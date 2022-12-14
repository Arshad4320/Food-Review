
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../../image/img3.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';


const About = () => {
    return (

        <div className='grid grid-col-1 gap-10 lg:grid-cols-2 m-10 '>
            <div className='bg-cyan-800 p-3   rounded-md shadow'>
                <h2 className='text-4xl font-bold text-orange-500 mb-2'>About us</h2>
                <p className='text-md text-justify py-1 text-white'>Food is any substance consumed to provide nutritional support and energy to an organism.It can be raw, processed or formulated and is consumed orally by animals for growth, health or pleasure.Foods are directly related to our body and mental and social health because each food or liquid contains particular nutrition such as carbohydrates, protein, vitamins, minerals, fats, etc.
                </p>
            </div>
            <div >
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" className='w-100 w-full rounded-md' src={img} />
                    </PhotoView>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default About;