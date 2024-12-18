import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {signInWithGoogle} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result => {
      console.log(result.user)
      navigate(from)

    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <div>
       <button onClick={handleGoogleSignIn} className='btn'>Google</button>
    </div>
  );
};

export default SocialLogin;