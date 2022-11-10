import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceItem = ({ item }) => {
    const { img, name, description, price, _id } = item;
    return (
        <div >
            <Card className='shadow'>

                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" className='w-100' src={img} />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            description?.length > 100 ? description.slice(0, 100) + "..." : description
                        }
                    </Card.Text>
                    <div className='d-flex justify-between'><h6>Price: ${price}</h6><h6 className='d-flex'><span className='mr-1'>Review</span>  <span className='d-flex text-yellow-400'><FaStar /><FaStar /><FaStar /></span></h6></div>
                    <Link to={`/singleFood/${_id}`} className='text-decoration-none'>
                        <Button variant="warning" className='text-center'>Details</Button>
                    </Link>
                </Card.Body>

            </Card >
        </div >
    );
};

export default ServiceItem;