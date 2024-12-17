import Lottie from "lottie-react";
import React, { useContext } from "react";
import loginLottie from "../assets/lottie/login.json";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../context/SocialLogin";

const SignIn = () => {
  const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // password validation
    // show password validation error
    signInUser(email, password)
      .then((result) => {
        console.log('sign in',result.user);
        navigate(from)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      <Lottie animationData={loginLottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-4xl ml-5 font-bold">Sign In now!</h1>

      <form onSubmit={handleSignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email'
          type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password'
          type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
      <div className="divider">OR</div>
          <div className="m-5">
          <SocialLogin></SocialLogin>
          </div>
    </div>
  </div>
</div>
  );
};

export default SignIn;