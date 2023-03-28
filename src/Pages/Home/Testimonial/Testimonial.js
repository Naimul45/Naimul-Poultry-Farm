import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ testimonial }) => {
  const { photo, name, description, review } = testimonial;
  // console.log(testimonial)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className='flex'>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={photo} alt="" />
            </div>
          </div>
          <span className='ml-6'>
            <h2 className="card-title text-xl font-bold">{name}</h2>

          </span>
        </div>
        <p className='mr-2'>{description}</p>
        <div className="mt-6">
          <span className='text-lg font-semibold'>Review : <FaStar className="text-yellow-600 ml-20 -mt-5" />  </span>
          <p className="ml-32 -mt-5 text-secondary font-semibold text-lg">{review} out of 5</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;