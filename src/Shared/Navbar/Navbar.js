import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useAdmin from '../../hooks/useAdmin';
import { MdRateReview, MdOutlineShoppingCart } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
const Navbar = () => {
  const { signout, user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email)
  // console.log(user)
  const logout = () => {
    signout()
      .then(() => toast.success("signout successfully"))
      .catch(() => { })
  }
  return (
    <div className="navbar bg-pink-100 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link className='font-semibold text-lg' to="/">Home</Link></li>
            <li><Link className='font-semibold text-lg' to="/services">Services</Link></li>
            <li><Link className='font-semibold text-lg' to="/dashboard">Dashboard</Link></li>

            <div className="flex mt-2 ml-4">
              <span className="text-lg font-bold text-orange-600">{user?.displayName}</span><div className="avatar">
                <div className="w-12 rounded-full ml-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </div>
            <div className="navbar-end ml-4 mt-2">
              {
                user ? <button onClick={() => logout()} className="btn btn-secondary w-32">Logout</button> :
                  <Link to='/login' className="btn bg-fuchsia-600 w-32">Login</Link>
              }
            </div>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl h-20"><div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://thumbs.dreamstime.com/b/chicken-logo-vector-illustration-eps-164109791.jpg" alt="" />
          </div>
        </div>


          Naimul <br />Poultry Farm</Link>
      </div>
      <div className="navbar-center hidden lg:flex ml-44">
        <ul className="menu menu-horizontal px-1">
          <li><Link className='font-semibold text-lg' to="/">Home</Link></li>
          <li><Link className='font-semibold text-lg' to="/services">Services</Link></li>
          <li><Link className='font-semibold text-lg' to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>

      <div className="lg:flex ml-20 hidden">
        <span className="text-lg font-bold text-orange-600">{user?.displayName}</span><div className="avatar">
          <div className="w-12 rounded-full ml-2">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
      </div>
      <div className="navbar-end hidden lg:block lg:ml-72">
        {
          user ? <button onClick={() => logout()} className="btn btn-secondary w-32">Logout</button> :
            <Link to='/login' className="btn bg-fuchsia-600 w-32">Login</Link>
        }
      </div>
      <div className="dropdown dropdown-end lg:hidden ml-64">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <div className="w-1/5">
            <Link to="/dashboard" className="flex"><button className="btn  px-12 btn-ghost"><MdOutlineShoppingCart className="mr-2 text-lg" />OrderList</button></Link>
            <Link to="/review" className="flex"><button className="btn  px-14 btn-ghost"><MdRateReview className="mr-2 text-lg" />Review</button></Link>
            {
              isAdmin && <>
                <Link to="/allusers" className="flex"><button className="btn  px-12 btn-ghost"><FaUsers className="mr-2 text-lg" />All Users</button></Link>
              </>
            }

            {
              isAdmin && <>
                <Link to="/addservice" className="flex"><button className="btn  px-10 btn-ghost"><AiOutlinePlus className="mr-2 text-lg" />Add Service</button></Link>

              </>
            }

          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;