// import React, { useContext } from 'react';
// import { Container, Row, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';

// import swal from 'sweetalert';
// import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../AuthContex/AuthProvider';




// const Review = () => {
//     const { user } = useContext(AuthContext)
//     const item = useLoaderData();

//     const { _id, name, price, } = item;

//     const handleReview = event => {
//         event.preventDefault()
//         const form = event.target;
//         const userName = form.name.value;
//         const review = form.review.value;
//         const email = user?.email || 'unregistered'

//         const food = {
//             Food: _id,
//             ReviewerName: userName,
//             FoodName: name,
//             price: price,
//             email,
//             review,

//         }

//         fetch('http://localhost:5000/foodReview', {

//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(food)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.acknowledged) {
//                     swal("Thanks", "Your Review Successfully added!", "success");
//                     form.reset()
//                 }

//             })
//             .catch(err => console.error(err))
//     }

//     return (
//         <Container>
//             <Row>
//                 <Form onSubmit={handleReview}>
//                     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-3'>
//                         <input type="text" name='name' placeholder="your name" className="input input-bordered input-primary" />
//                         <input type="text" placeholder="Type here" className="input input-bordered input-primary  " defaultValue={user?.email} readOnly />
//                     </div>
//                     <textarea name='review' className="textarea textarea-primary w-full h-28" placeholder="Your Review"></textarea>


//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </Row>
//         </Container>
//     );
// };

// export default Review;