import React, { useContext } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import swal from 'sweetalert';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContex/AuthProvider';




const Review = () => {
    const { user } = useContext(AuthContext)
    const item = useLoaderData();

    const { _id, name, price, img } = item;

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const review = form.review.value;
        const email = user?.email || 'unregistered'

        const food = {
            Food: _id,
            ReviewerName: userName,
            FoodName: name,
            price: price,
            email,
            review,
            img

        }

        fetch('https://food-server-two.vercel.app/foodReview', {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    swal("Thanks", "Your Review Successfully added!", "success");
                    form.reset()
                }

            })
            .catch(err => console.error(err))
    }

    return (
        <Container>
            <Row>
                <Col >
                    <div className=' my-20'>
                        <Form onSubmit={handleReview} className='bg-emerald-900 rounded shadow p-10 sm:w-100 lg:w-3/5 m-auto'>
                            <h2 className='text-center text-white mb-4'>Your Review</h2>
                            <div className='grid grid-cols-1 gap-3 mb-3 bo'>
                                <Form.Label className="text-sky-300 text-lg">Your name </Form.Label>
                                <input type="text" name='name' placeholder="your name" className="input  shadow-sm" required />
                                <Form.Label className="text-sky-300 text-lg">Email Address </Form.Label>
                                <input type="text" placeholder="Type here" className="input shadow-sm" defaultValue={user?.email} readOnly />
                            </div>
                            <Form.Label className="text-sky-300 text-lg">Your Review</Form.Label>
                            <textarea name='review' className="textarea shadow-sm w-full h-28" placeholder="Your Review" required></textarea>
                            <button className="btn btn-success mt-3 w-full" type='submit'>Submit</button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Review;