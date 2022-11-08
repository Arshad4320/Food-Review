import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthContex/AuthProvider';





const SignUp = () => {
    const { createUser, signInGoogle } = useContext(AuthContext)

    const handelSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(err => console.error(err))
    }
    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <Form className='w-full lg:w-1/2 mx-auto p-5  ' onSubmit={handelSignUp}>
            <div className='border-2 shadow border-teal-400 rounded p-5'>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>Already have an account?<Link to='/login'> Login</Link></p>
                </Form.Group>
                <Button className='w-full    mt-3 mb-2' variant="primary" type="submit">
                    Sign up
                </Button>
                <Button onClick={handleGoogle} variant="dark" className='d-flex w-full justify-center'> <FaGoogle className='mt-1' /><span className='ml-2 '>Sign in Google</span></Button>

            </div>
        </Form>
    );
};

export default SignUp;