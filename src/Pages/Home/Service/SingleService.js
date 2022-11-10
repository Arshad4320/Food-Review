import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthContex/AuthProvider';
import swal from 'sweetalert';
import AllFoodReview from '../../AllFoodReview/AllFoodReview';
import Table from 'react-bootstrap/Table';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = () => {
    const { user } = useContext(AuthContext)
    const item = useLoaderData();
    const { _id, name, img, price, description } = item;

    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(() => {
        fetch(`https://food-server-two.vercel.app/allReview?Food=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


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
            <div className='my-20'>
                <Row>
                    <Col sm='12' md="12" lg="6">
                        <Card className='shadow'>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <Card.Img variant="top" className='w-100 w-full rounded-md' src={img} />
                                </PhotoView>
                            </PhotoProvider>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <div className='d-flex justify-between'><h6>Price: ${price}</h6><h6 className='d-flex'><span className='mr-1'>Review</span>  <span className='d-flex text-yellow-400'><FaStar /><FaStar /><FaStar /></span></h6></div>
                                <Link to='/allService' className='text-decoration-none'> <Button variant="warning" className='text-center'>See All Food</Button></Link>

                                <Link to={`/review/${_id}`} className='text-decoration-none'> <Button variant="warning" className='text-center'>Add Review</Button></Link>

                            </Card.Body>
                        </Card >
                    </Col>
                    <Col sm="12" md="12" lg="6">

                        <div className="overflow-x-auto">
                            <table className="table w-full ">
                                <thead>
                                    <h3 className='font-bold text-blue-500'>Food Review {reviews.length}</h3>
                                    <tr >
                                        <th className='text-lg'>Food Name</th>
                                        <th className='text-lg' >Review</th>
                                        <th className='text-lg'>Reviewer Name</th>
                                    </tr>
                                </thead>

                                {
                                    reviews.map(review => <AllFoodReview key={review._id} reviews={review}></AllFoodReview>)
                                }
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default SingleService;