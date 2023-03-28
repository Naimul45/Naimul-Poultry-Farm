import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Farm from '../Farm/Farm';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Services from '../Services/Services';
import TestimonialInfo from '../Testimonial/TestimonialInfo';

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setServices(data)
      })

  }, [])
  return (
    <div>
      <div className='bg-pink-100'>
        <Navbar></Navbar>
        <Header></Header>

      </div>
      <div className='mt-10'>

        <h2 className='text-3xl font-bold text-center'>Our Awesome <span className='text-3xl font-bold text-fuchsia-600'>Services</span></h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ml-10 mt-10">

          {
            services.map(service => <Services
              service={service}
            ></Services>)
          }
        </div>
      </div>
      <Farm></Farm>
      <TestimonialInfo></TestimonialInfo>
      <Form></Form>

    </div>
  );
};

export default Home;