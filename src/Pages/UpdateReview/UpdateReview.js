import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const reviews = useLoaderData()
    console.log();
    const [update, setUpdate] = useState(reviews);
    console.log(reviews);
    const handleUpdateData = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${reviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    console.log(data);
                }

            })
    }
    const handeupdateChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUpdate = { ...update }
        newUpdate[field] = value;
        setUpdate(newUpdate);
    }

    return (
        <div>
            <h2>Please Update: { }</h2>
            <form onSubmit={handleUpdateData}>
                <input onChange={handeupdateChange} type="text" name='name' placeholder='name' required />
                <br />

                <button type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;