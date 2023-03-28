import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Loading = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center mt-24">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">

        </div>
      </div>
    </div>
  );
};

export default Loading;