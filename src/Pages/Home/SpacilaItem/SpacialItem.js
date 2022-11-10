import React from 'react';
import img1 from '../../../image/img4.jpg'
import img2 from '../../../image/img5.jpg'
import img3 from '../../../image/img6.jpg'
import img4 from '../../../image/img7.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Card } from 'react-bootstrap';
const SpacialItem = () => {
    return (
        <div className='my-20'>
            <h2 className='lg:text-5xl text-4xl text-center font-semibold text-orange-500 mb-5'>Spacial Food</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10  '>

                <div className='rounded shadow'>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={img1}>
                                <Card.Img variant="top" className='w-100 w-full rounded-md' src={img1} />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div>
                        <p className='text-xl p-2 font-semibold text-orange-600'>The Perfect Chocolate Cake</p>
                    </div>
                </div>

                <div className='rounded shadow'>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={img2}>
                                <Card.Img variant="top" className='w-100 w-full rounded-md' src={img2} />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div>
                        <p className='text-xl p-2 font-semibold text-orange-600'>Baked Pastas That Are Crazy</p>
                    </div>
                </div>

                <div className='rounded shadow'>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={img3}>
                                <Card.Img variant="top" className='w-100 w-full rounded-md' src={img3} />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div>
                        <p className='text-xl p-2 font-semibold text-orange-600'>Cream Filled Yellow Cake</p>
                    </div>
                </div>

                <div className='rounded shadow'>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={img4}>
                                <Card.Img variant="top" className='w-100 w-full rounded-md' src={img4} />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div>
                        <p className='text-xl p-2 font-semibold text-orange-600'>Hummingbird Cake Recipy</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpacialItem;





