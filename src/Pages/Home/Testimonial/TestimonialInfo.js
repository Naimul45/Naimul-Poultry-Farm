import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';


const TestimonialInfo = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTestimonials(data)
      })
  }, [])
  return (
    <div className='mt-16 '>
      <h2 className='text-3xl font-bold text-center mb-10'>Our Customer Review</h2>
      <div className='grid lg:grid-cols-3 gap-4 grid-cols-1 ml-12'>
        {
          testimonials?.map(testimonial => <Testimonial
            testimonial={testimonial}
          ></Testimonial>)
        }
      </div>
    </div>
  );
};

export default TestimonialInfo;