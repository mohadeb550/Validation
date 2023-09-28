import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export default function Register() {

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => console.log(result))
    .catch(error => console.log(error))
  } 


  return (
    <div>
      <h2 className="text-3xl"> Plese Register </h2>
      <form onSubmit={handleRegister}>

      <input type="email" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" name="email" /> <br/>

      <input type="password" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" name="password" /> <br/>

        <button className="btn btn-accent"> Register </button>
      </form>
    </div>
  )
}
