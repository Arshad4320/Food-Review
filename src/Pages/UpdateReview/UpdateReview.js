import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateReview = () => {
    const reviews = useLoaderData()
    console.log();
    const [update, setUpdate] = useState(reviews);

    const handleUpdateData = event => {
        event.preventDefault();
        fetch(`https://food-server-two.vercel.app/foodReview/${reviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Thanks!", "Data update successfully !", "success");
                }

            })
    }

    const handleUpdateChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUpdate = { ...update }
        newUpdate[field] = value;
        setUpdate(newUpdate);
    }
    return (
        <div className='m-20 mx-auto lg:w-3/5 md:w-3/5'>
            <div className='text-center rounded shadow p-10 bg-emerald-800   mx-10 '>
                <h2 className='text-white'>Please Update { }</h2>
                <form onSubmit={handleUpdateData} className='w-full'>

                    <input onChange={handleUpdateChange} name='name' type="text" placeholder="Update Review" className="input input-bordered w-full max-w-xs" defaultValue={reviews.review} required />

                    <br />

                    <Button type="submit" className='mt-3' variant="warning">Update Review</Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;