import React from 'react';

const AllFoodReview = ({ reviews }) => {
    const { FoodName, ReviewerName, review } = reviews;
    return (

        <tbody>
            <tr>
                <td>{FoodName}</td>
                <td>{review}</td>
                <td>{ReviewerName}</td>

            </tr>
        </tbody>
    );
};

export default AllFoodReview;