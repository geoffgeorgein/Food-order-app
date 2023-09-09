import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  console.log("user",user);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div className='flex items-center justify-center pt-10 mt-10'>
      
      <div className='flex flex-col items-center justify-center p-5 pt-6 mt-5'>
      <h1 className='text-white mb-4 font-bold'>Sign in</h1>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;