import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { AiFillEyeInvisible , AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function Hero() {

  const [ registerError , setRegisterError ] = useState('');
  const [ success , setSuccess ] = useState('');
  const [ visible , setVisible ] = useState(false);
  const [ acceptTerms , setAcceptTerms ] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

      setRegisterError('');
      setSuccess('');

      if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
       return setRegisterError('Password is Not Valid');
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

       <div className='relative'>

       <input type={visible? 'text': 'password'} placeholder="password" className="input input-bordered w-full" name='password' required />

     <div className='absolute right-3 bottom-4 cursor-pointer' onClick={()=> setVisible(!visible)}>
     {visible? <AiFillEyeInvisible /> : <AiFillEye /> }
     </div>

       </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover"> Forgot password?</a>
          </label>


          <div className='flex items-center gap-1 my-2'>
        <input type='checkbox' name='terms' onChange={()=> setAcceptTerms(!acceptTerms)}/>
        <label className='text-xs text-blue-600 '> Please Accept Out Terms & Condition!</label>
       </div>

        <p className='text-sm '> Already Have an account? Please <Link to='/login' className='text-blue-600 font-semibold'> Login</Link> </p>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={acceptTerms? "" : "true"} >Login</button>
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
