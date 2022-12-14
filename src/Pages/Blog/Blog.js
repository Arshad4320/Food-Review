import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2 className='lg:text-5xl text-4xl text-center font-semibold text-orange-500 my-5' >Blog Question</h2>
            <div className='grid grid-cols-1 sm:mb-7 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
                <div className='text-justify bg-cyan-900 p-10 shadow rounded '>
                    <h5 className='text-white'>What is the basic difference between SQL and NoSQL? </h5>
                    <p className='text-orange-300 '>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className='text-justify bg-cyan-900 p-10 shadow rounded '>
                    <h5 className='text-white'>How does authentication work with JWT?</h5>
                    <p className='text-orange-300 '>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
                <div className='text-justify bg-cyan-900 p-10 shadow rounded '>
                    <h5 className='text-white'>What is the difference between javascript and node js</h5>
                    <p className='text-orange-300 '>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution</p>
                </div>
                <div className='text-justify bg-cyan-900 p-10 shadow rounded '>
                    <h5 className='text-white'>How does node js handle multiple requests the some time</h5>
                    <p className='text-orange-300 '>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;