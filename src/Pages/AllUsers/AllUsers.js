import React, { useState, useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { MdRateReview, MdOutlineShoppingCart } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { useQuery, } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import useAdmin from '../../hooks/useAdmin';

const AllUsers = () => {

  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      const data = await res.json()
      return data


    }
  })
  const handleDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('user deleted sucessfully !')
        refetch()
      })
  }

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make Admin Successful.')
          refetch()
        }
      })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex w-full bg-base-200 lg:pr-20">
        <div className="w-1/5 hidden lg:block">
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
        <div className="overflow-x-auto lg:w-4/5 w-full m-2">
          <h2 className="text-2xl font-bold text-secondary">All Users</h2>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>


              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users?.map((user, i) => <tr>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm btn-secondary">Make Admin</button>}</td>
                  <td><button onClick={() => handleDelete(user?._id)} className="btn btn-sm btn-danger">Delete</button></td>


                </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default AllUsers;