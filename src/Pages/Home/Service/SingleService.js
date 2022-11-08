import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthContex/AuthProvider';
const SingleService = () => {
    const { user } = useContext(AuthContext)
    const item = useLoaderData();

    const { _id, name, img, price, description } = item;

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;

        const email = user?.email || 'unregistered'

        const food = {
            Food: _id,
            FoodName: name,
            price: price,
            email,


        }

        fetch('http://localhost:5000/foods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }


    return (
        <Container>
            <div className='my-20'>
                <Row>
                    <Col sm='12' md="12" lg="">
                        <Card style={{}}>
                            <Card.Img variant="top" className='w-100' src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <div className='d-flex justify-between'><h6>Price: ${price}</h6><h6 className='d-flex'><span className='mr-1'>Review</span>  <span className='d-flex text-yellow-400'><FaStar /><FaStar /><FaStar /></span></h6></div>
                                <Link to='/allService'> <Button variant="primary" className='text-center'>See All Food</Button></Link>
                            </Card.Body>
                        </Card >
                    </Col>
                    <Col sm='12' md="12" lg="12" className='mt-5' >
                        <Form onSubmit={handleReview}>

                            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3'>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered input-primary" />
                                <input type="text" placeholder="Type here" className="input input-bordered input-primary  " defaultValue={user?.email} readOnly />
                            </div>
                            <textarea name='review' className="textarea textarea-primary w-full h-28" placeholder="Your Review"></textarea>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default SingleService;