import React, { useContext, useEffect, useState } from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../AuthContex/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/foodReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    return (
        <Container>
            <Row>
                <Col>
                    <div>

                        <p className='text-center py-5 text-4xl font-semibold text-blue-900'>your review {reviews.length}</p>
                        <div>
                            <div>
                                <div className="overflow-x-auto  ">
                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <th>Food Name</th>
                                                <th>Review</th>
                                                <th>Reviewer Name</th>
                                                <th>Reviewer Email</th>
                                            </tr>
                                        </thead>
                                        {
                                            reviews.map(reviewItem => <ReviewRow key={reviewItem._id} reviewItem={reviewItem}></ReviewRow>)
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MyReview;