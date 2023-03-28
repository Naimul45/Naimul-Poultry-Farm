import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useToken from '../../hooks/useToken';
const Login = () => {
  const navigate = useNavigate()
  const { signinUser } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  if (token) {
    navigate("/")
  }


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value

    signinUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setLoginUserEmail(email)
        toast.success('user sign in successfully')

      })
      .catch(error => {
        const message = error.message;
        console.error(message)
        toast.error(message)
      })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen">

        <div className="hero-content flex-col lg:flex-row-reverse">


          <div className="card flex-shrink-0 shadow-2xl bg-base-100" style={{ width: "450px" }}>
            <h2 className='text-3xl p-4 '>Login</h2>
            <form onSubmit={handleLogin} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                <p>Are you new here ? Please <Link to="/signup" className='text-lg text-orange-600'>Signup</Link></p>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-fuchsia-600 w-full">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;