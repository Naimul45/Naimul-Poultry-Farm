import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../hooks/useToken';
const SignUp = () => {
  const navigate = useNavigate();

  const { createUser, googleSignin, profileUpdate } = useContext(AuthContext)
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)

  if (token) {
    navigate('/')
  }

  const handleSignin = () => {
    googleSignin()
      .then(result => {
        const user = result.user;
        const user1 = {
          name: user.displayName,
          email: user.email
        }
        fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user1)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setCreatedUserEmail(user1?.email)
          })
        toast.success('user created successfully')
      })
      .catch(error => {
        const message = error.message;
        console.error(message)
        toast.error(message)
      })

  }
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.file.value;
    const password = form.password.value
    console.log(name, email, photo, password)
    const user = {
      name,
      email
    }
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(user?.email)
      })

    createUser(email, password)
      .then(result => {
        const user = result.user;


        console.log(user);
        toast.success("user created successfully")
        const userInfo = {
          displayName: name,
          photoURL: photo
        }
        profileUpdate(userInfo)
          .then(() => {


          })
        // navigate('/')

      })
      .catch(error => {
        const message = error.message
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
            <h2 className='text-3xl p-4 '>Create an account</h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Photo URL" name="file" className='input input-bordered p-2' id="" />
              </div>

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

              </div>

              <div className="form-control mt-6">
                <button className="btn bg-fuchsia-600">Create an account</button>
              </div>
            </form>

          </div>

        </div>

      </div>
      <div className="flex flex-col lg:ml-96 ml-4 border-opacity-50" style={{ width: "450px" }}>

        <div className="divider lg:ml-32">OR</div>

      </div>
      <div className='lg:ml-96'>
        <button onClick={() => handleSignin()} className="btn bg-fuchsia-700 lg:ml-24 ml-12" style={{ width: "400px" }}><FcGoogle className='text-3xl mr-6' />Signin with Google</button>
      </div>
    </div>
  );
};

export default SignUp;