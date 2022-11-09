import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthContex/AuthProvider';



const Login = () => {
    const location = useLocation()
    let navigate = useNavigate();
    const { loginUser } = useContext(AuthContext)
    let from = location.state?.from?.pathname || "/";
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                swal("Welcome!", "Login successfully!", "success");
                navigate(from, { replace: true });
                form.reset()
            })
            .catch(err => console.error(err))
    }

    return (
        <Form className='w-full lg:w-1/2 mx-auto p-5  ' onSubmit={handelLogin}>
            <div className='border-2 shadow bg-emerald-900 rounded p-5'>
                <h2 className='text-center mb-4 text-white'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-sky-300 text-lg'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-sky-300 text-lg'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className='text-sky-300 text-lg'>new to food service? <Link to='/signup'>Sign up</Link></p>
                </Form.Group>
                <Button className='w-full mt-3 mb-2' variant="success" type="submit">
                    Login
                </Button>


            </div>
        </Form>
    );
};

export default Login;