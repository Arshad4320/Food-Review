import React, { useContext, useEffect, useState } from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../AuthContex/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';
import swal from 'sweetalert';



const MyReview = () => {


    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([])
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/foodReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete this review')
        if (proceed) {
            fetch(`http://localhost:5000/foodReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        swal("Deleted successfully!", "success");
                        const remaining = items.filter(odr => odr._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }


    // const handleUpdate = id => {
    //     fetch(`http://localhost:5000/foodReview/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 const remaining = items.filter(odr => odr._id !== id);
    //                 const approving = items.find(odr => odr._id !== id);
    //                 approving.status = 'Approved'
    //                 const newOrders = [...remaining, approving];
    //                 setItems(newOrders)

    //             }
    //         })
    // }

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <p className='text-center py-5 text-3xl lg:text-4xl font-semibold text-orange-600'>Your Review {reviews.length}</p>
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
                                            // handleUpdate = { handleUpdate }

                                            reviews.map(reviewItem => <ReviewRow key={reviewItem._id} handleDelete={handleDelete} reviewItem={reviewItem}></ReviewRow>)}
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