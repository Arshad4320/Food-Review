import ColorNames from 'daisyui/src/colors/colorNames';
// import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ReviewRow = ({ reviewItem }) => {
    const { FoodName, ReviewerName, email, review, } = reviewItem;



    return (
        <tbody>
            <tr>
                <th>
                    <Button className='mr-2'>Delete</Button>
                    <Button>Edit</Button>
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