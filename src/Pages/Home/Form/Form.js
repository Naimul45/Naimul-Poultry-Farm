import { QueryClient, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import './Form.css'


const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = info => {
    console.log(info)
    fetch('http://localhost:5000/formInfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('message send successfully')
      })



  }
  return (
    <div className="min-h-screen bg-green-200 mt-16 lg:flex justify-center ">
      <div>
        <h2 className='text-3xl font-bold lg:mt-16 pt-10 text-center mb-6'>Let us handle your <br /> project,professionally</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="ml-20">
          {/* register your input into the hook by invoking the "register" function */}

          <div className='flex'>
            <div className="margin-reduce w-5/6 ">
              <input type="text"{...register("full name")} placeholder="Full Name" className="input p-4 input-bordered w-4/6  mr-4 mb-4" />
              <input type="text"{...register("last name")} placeholder="Last Name" className="input p-4 input-bordered w-4/6" />
            </div>

            <div className='w-5/6 ml-4 lg:ml-2'>
              <input type="text"{...register("email")} placeholder="Email Address" className="input mb-4 p-4 input-bordered w-4/6  mr-4" />
              <input type="text"{...register("phone")} placeholder="Phone Number" className="p-4 input input-bordered w-4/6 " />
            </div>
          </div>
          <textarea name="" placeholder='Your Message' className='w-4/5 block mt-4 p-4 h-44' ></textarea>


          {errors.exampleRequired && <span>This field is required</span>}

          <button className='btn btn-active btn-secondary mt-4 lg:ml-60 ml-28'>Send Message</button>
        </form>
      </div>

    </div>
  );
};

export default Form;