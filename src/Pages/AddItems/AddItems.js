import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';

const AddItems = () => {
    useTitle('Add Food')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allFoodService')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])



    const handleAddUser = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const description = form.description.value;
        const name = form.name.value;
        const img = form.img.value;
        const item = { price, description, name, img };


        fetch('http://localhost:5000/allFoodService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(res => res.json())
            .then(data => {
                const newItems = [...items, data];
                setItems(newItems);
            })
            .catch(err => console.error(err))

        form.reset();


    }

    return (
        <Form onSubmit={handleAddUser} className='w-full lg:w-1/2 mx-auto p-5 '>
            <div className='border-2 shadow bg-emerald-900 rounded p-5'>
                <h2 className='text-center mb-4 text-white'>Add Food Item</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-sky-300 text-lg">Food Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-sky-300 text-lg">Image url</Form.Label>
                    <Form.Control name='img' placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-sky-300 text-lg">Description</Form.Label>
                    <Form.Control type="text" name='description' placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-sky-300 text-lg">Price</Form.Label>
                    <Form.Control type="text" name='price' placeholder="Password" />
                </Form.Group>
                <button className="btn btn-success w-full  mt-3 mb-2">Submit</button>

            </div>
        </Form>
    );
};

export default AddItems;