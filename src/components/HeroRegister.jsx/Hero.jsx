import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

export default function Hero() {

  const [ registerError , setRegisterError ] = useState('');
  const [ success , setSuccess ] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

      setRegisterError('');
      setSuccess('');


      if(password.length < 6){
        setRegisterError('Password Should be at least 6 character');
        return;
      }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result => setSuccess('Your Account Successfully Created!'))
        .catch(error => setRegisterError(error.message))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"> Register Now </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

       <form onSubmit={handleRegister}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"> Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       </form>
      {registerError && <p className='text-red-600 font-semibold'> {registerError} </p>}
      {success && <p className='text-green-600 font-semibold'> {success} </p>}
      </div>
    </div>
  </div>
</div>
  )
}