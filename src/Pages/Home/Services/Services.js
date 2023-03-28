import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast'

const Services = ({ service }) => {

  const { user } = useContext(AuthContext)
  const { servicetitle, img, description, price } = service;
  const onSubmitHandler = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    // console.log( name, email, price, phone)
    const booking = {
      name,
      email,
      price,
      phone,
      servicetitle,
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("booking confirm")
      })

  }







  return (

    <div>



      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{servicetitle}</h2>
          <p>{description}</p>
          <p className='text-lg font-bold text-orange-600'>Price : {price}</p>
          <div className="card-actions justify-end">
            <label htmlFor="booking" className="btn btn-secondary">Order Now</label>

          </div>
        </div>
      </div>

      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative ">

          <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


          <form onSubmit={onSubmitHandler}>
            {/* register your input into the hook by invoking the "register" function */}

            <h3 className="text-lg font-bold">{service.servicetitle}</h3>

            <p className="text-lg font-bold mb-4">Price : {price} <span className="text-lg font-bold text-orange-600"></span></p>

            <input type="text" name="name" className="input mb-4 p-4 input-bordered w-full max-w-xs mr-4" defaultValue={user?.displayName} disabled />
            <input type="email" name="email" defaultValue={user?.email} disabled className="input p-4 input-bordered w-full max-w-xs mr-4 mb-4" />
            <input type="text" name="price" defaultValue={price} disabled className="p-4 input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" className="p-4 input input-bordered w-full max-w-xs mt-2" />

            <div className="modal-action">
              <button htmlFor="booking" className="btn  btn-secondary mt-6">Submit</button>
            </div>
            {/* <div className="modal-action">
              <label htmlFor="booking" className="btn btn-secondary mt-6">Submit</label>
            </div> */}
            {/* htmlFor="booking" */}
          </form>



        </div>
      </div>
    </div>

  );
};

export default Services;