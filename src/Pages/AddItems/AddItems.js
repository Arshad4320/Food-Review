import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddItems = () => {
    return (
        <Form className='w-full lg:w-1/2 mx-auto p-5 '>
            <div className='border-2 shadow bg-emerald-900 rounded p-5'>
                <h2 className='text-center mb-4 text-white'>Add Food Item</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-sky-300 text-lg">Food Name</Form.Label>
                    <Form.Control type="email" name='name' placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-sky-300 text-lg">Food url</Form.Label>
                    <Form.Control type="email" name='name' placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-sky-300 text-lg">Description</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-sky-300 text-lg">Price</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <button className="btn btn-success w-full  mt-3 mb-2">Submit</button>

            </div>
        </Form>
    );
};

export default AddItems;