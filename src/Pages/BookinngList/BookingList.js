import React, { useState, useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { MdRateReview, MdOutlineShoppingCart } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Loading/Loading';
import { useQuery } from '@tanstack/react-query'




const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)

  const { isLoading, refetch } = useQuery({
    queryKey: [''],
    queryFn: async () => {

    }
  })

  fetch(`http://localhost:5000/booking?email=${user?.email}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    },
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setBookings(data)
      refetch()
    })

  if (isLoading) {
    return <Loading></Loading>
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
          <h2 className="text-2xl font-bold text-secondary">Order List</h2>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                bookings?.map((booking, i) => <tr>
                  <th>{i + 1}</th>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.servicetitle}</td>
                  <td>{booking.price}</td>
                  <td>{booking.phone}</td>
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

export default BookingList;