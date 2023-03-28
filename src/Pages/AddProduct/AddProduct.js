import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdRateReview, MdOutlineShoppingCart } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const onSubmit = data => {
    console.log(data)
    fetch('http://localhost:5000/addservice', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('adding a new product was successful')
      })

  };






  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <Navbar></Navbar>

      <div className="bg-base-200">
        <div className="flex w-full  lg:pr-20 pb-6">
          <div className="w-1/5 bg-white pb-6 pr-10 hidden lg:block">
            <Link to="/dashboard" className="flex"><button className="btn  px-16 btn-ghost"><MdOutlineShoppingCart className="mr-2 text-lg" />OrderList</button></Link>
            <Link to="/review" className="flex"><button className="btn px-20 btn-ghost"><MdRateReview className="mr-2 text-lg" />Review</button></Link>
            {
              isAdmin && <>
                <Link to="/allusers" className="flex"><button className="btn px-16 btn-ghost"><FaUsers className="mr-2 text-lg" />All Users</button></Link>
              </>
            }

            {
              isAdmin && <>
                <Link to="/addservice" className="flex"><button className="btn px-16 btn-ghost"><AiOutlinePlus className="mr-2 text-lg" />Add Service</button></Link>

              </>
            }

          </div>
          <div className="ml-6 w-4/5">

            <div className="overflow-x-auto w-4/5">
              <h2 className="text-2xl py-2 text-secondary font-semibold">Add Service</h2>


            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="bg-white  p-6 mr-2">
              <div className="lg:flex">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mr-10">
                  <h2 className="text-lg font-semibold mb-1">Service Title</h2>
                  <input type="text" {...register("servicetitle")} placeholder="Enter Service Title" className="input input-bordered lg:w-96" />
                  <br />
                  <h2 className="text-lg font-semibold mt-2">Description</h2>
                  <textarea {...register("description")} placeholder="Enter Your Description" description="description" className="input input-bordered lg:w-96 h-28 pt-2"></textarea>
                  <br />
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                <div>
                  <h2 className="text-lg font-semibold">Image</h2>
                  <input type="text" {...register("photoURL")} placeholder="Upload Image" className="input input-bordered input-secondary bg-pink-100 text-secondary" />
                  <br />
                  {/* errors will return when field validation fails  */}
                  <h2 className="text-lg font-semibold mt-2">Price</h2>
                  <input placeholder="Price" type="text"{...register("price")} className="Enter Price input input-bordered" />
                </div>
              </div>


              <input type="submit" className="btn btn-secondary mt-4 px-10  mb-20" />


            </form>
          </div>
        </div>

      </div>
    </div>
  )
};

export default AddProduct;