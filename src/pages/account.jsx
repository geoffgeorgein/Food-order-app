import React from 'react';
import { UserAuth } from '../store/AuthContext';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] mx-auto mt-10 p-8 flex flex-col items-center '>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p className='text-white'>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10 rounded-lg font-bold'>
        Logout
      </button>
    </div>
  );
};

export default Account;