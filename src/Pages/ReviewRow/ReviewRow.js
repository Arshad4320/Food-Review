import ColorNames from 'daisyui/src/colors/colorNames';
import { useState } from 'react';
// import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ReviewRow = ({ reviewItem, handleDelete, handleUpdate }) => {

    const { FoodName, ReviewerName, email, review, _id } = reviewItem;

    return (
        <tbody>
            <tr>
                <th>
                    <Button variant='warning' onClick={() => handleDelete(_id)} className='mr-2'>Delete</Button>
                    <Link to={`/foodReview/${_id}`}><Button variant='warning' onClick={() => handleUpdate(_id)}>Edit</Button></Link>
                </th>
                <td>{FoodName}</td>
                <td>{review}</td>
                <td>{ReviewerName}</td>
                <td>{email}</td>
            </tr>
        </tbody>
    );
};

export default ReviewRow;