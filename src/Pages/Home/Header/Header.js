import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row   w-full justify-evenly mt-6">
        <div className="text-center lg:text-left pt-16 ">
          <h1 className="text-3xl font-bold mb-8">BEAUTY FARM <br />FOR EVERYBODY</h1>
          <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Officia quidem praesentium facilis quo reiciendis totam <br />quia aspernatur voluptatem ea eius?</p>

          <button className='btn btn-active btn-secondary mt-8'>Get on Appoinment</button>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-12 mt-6 mb-12">
          <div className="card-body h-96">
            <img className='w-full h-96' src="https://img.freepik.com/premium-photo/hen-feeding-traditional-rural-barnyard-domestic-chicken-standing-yard-lawn-with-green-grass-free-range-poultry-farming-concept_127089-21967.jpg?w=2000" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;