import React, { useContext } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { MdRateReview, MdOutlineShoppingCart } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Loading/Loading';

const Review = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)

  const { register, handleSubmit } = useForm();

  const { isLoading } = useQuery({
    queryKey: [''],
    queryFn: async () => {

    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }




  const onSubmit = data => {
    console.log(data)
    fetch(`http://localhost:5000/review`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("Your review has been successful")


      })
  };


  return (
    <div>
      <Navbar></Navbar>

      <div className="flex w-full bg-base-200 lg:pr-20 pb-6">
        <div className="w-1/5 bg-white pb-6 pr-10 hidden lg:block">
          <Link to="/dashboard" className="flex"><button className="btn  px-16 btn-ghost"><MdOutlineShoppingCart className="mr-2 text-lg" />OrderList</button></Link>
          <Link to="/review" className="flex"><button className="btn px-20 btn-ghost"><MdRateReview className="mr-2 text-lg" />Review</button></Link>
          {
            isAdmin &&
            <>
              <Link to="/allusers" className="flex"><button className="btn px-16 btn-ghost"><FaUsers className="mr-2 text-lg" />All Users</button></Link>
            </>
          }

          {
            isAdmin && <>
              <Link to="/addservice" className="flex"><button className="btn px-16 btn-ghost"><AiOutlinePlus className="mr-2 text-lg" />Add Service</button></Link>

            </>
          }


        </div>
        <div className="ml-6">

          <div className="overflow-x-auto w-4/5">
            <h2 className="text-2xl py-2 text-secondary font-semibold">Review</h2>


          </div>


          <form onSubmit={handleSubmit(onSubmit)}>


            <input type="text"{...register("name")} placeholder="Your Name" className="input w-80 max-w-xs" />
            <br /><br />
            <input type="text"{...register("photo")} placeholder="Your PhotoURL" className="input w-80 max-w-xs" />
            <br /><br />
            <input type="text" {...register("companyName")} placeholder="Company Name" name="companyname" className="input w-80 max-w-xs" /><br />
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  font-medium">Review : Out of 5</span>

              </label>
              <select className="select select-bordered"{...register("review")}>

                <option select>5 Star</option>
                <option>4 Star</option>
                <option>3 Star</option>
                <option>2 Star</option>
                <option>1 Star</option>

              </select>

            </div>
            <br />
            <textarea description="description"{...register("description")} placeholder="Description" id="" className="w-80 p-4"></textarea>
            <br />
            <button type="submit" className="btn btn-secondary mt-2 px-16 mb-2">Submit</button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Review;