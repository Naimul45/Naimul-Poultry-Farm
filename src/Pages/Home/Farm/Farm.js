import React from 'react';

const Farm = () => {
  return (
    <div className='lg:pr-60 bg-green-200'>
      <div className="flex flex-col lg:flex-row-reverse   w-full mt-6">
        <div className="text-center lg:text-left pt-16 ">
          <h1 className="text-3xl font-bold mb-8">BEAUTY FARM <br />FOR EVERYBODY</h1>
          <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Officia quidem praesentium facilis quo reiciendis totam <br />quia aspernatur voluptatem ea eius?</p>

          <div className='flex mt-10 ml-20 lg:ml-0'>
            <div>
              <h1 className="text-3xl text-fuchsia-600 font-bold">1k+</h1>
              <p className="mt-4 text-lg font-semibold">Happy Customer</p>
            </div>
            <div className='ml-10'>
              <h1 className='text-3xl text-fuchsia-600 font-bold' >16+</h1>
              <p className='mt-4 text-lg font-semibold'>Total Service</p>
            </div>
          </div>
        </div>
        <div >
          <div className="card-body lg:mr-10">
            <img className='w-full' style={{ width: "500px" }} src="https://media.istockphoto.com/id/482901353/photo/poultry-farm-and-a-veterinary.jpg?s=612x612&w=0&k=20&c=l0Kl9YYWgLbrALobDA9_PPdX1pRAq44BVEhNLZq4FQQ=" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farm;