import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputText from '../components/InputText';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const baseURL = "http://122.248.212.102:5001/";
export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [requestError, setRequestError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    axios.put(baseURL+'reset/password', {
        code: data.code,
        newPassword: data.newPassword,
        confirmPassword:data.confirmPassword
      })
      .then(function (response) {
        if(response?.data?.success == true){
          setRequestError(response?.data?.message)
          setTimeout(() => {
            navigate('/login'); //this.props.navigation.navigate('Login')
        }, 5000);

      } else if(response?.data?.success == false) {
          console.log(response?.data?.message)
          setRequestError(response?.data?.message)
      }
      })
      .catch(function (error) {
        setRequestError(error?.response?.data?.error?.message)
      });
    
  };

  return (
    <>
      <div
        className='relative h-screen -mt-24'
        style={{
          backgroundImage: `url(https://gigaland.io/images/background/6.jpg)`
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-gray-800 shadow p-12 w-96'>
            <div className='flex items-center justify-start my-1'>
              <h1 className='text-white text-xl font-semibold'>Rest Password</h1>
            </div>
            <div className='flex items-center justify-start my-1 w-full'>
              <form
                id='reset'
                className='w-full -ml-2 space-y-4'
                onSubmit={handleSubmit(onSubmit)}
              >
                <InputText
                  name='code'
                  type='text'
                  placeholder='Enter OTP'
                  register={register}
                  validation={{ required: true }}
                  error={errors.code}
                />

                <InputText
                  name='newPassword'
                  type='password'
                  placeholder='Password'
                  register={register}
                  validation={{ required: true }}
                  error={errors.newPassword}
                />

                <InputText
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm Password'
                  register={register}
                  validation={{ required: true }}
                  error={errors.confirmPassword}
                />
                <button
                  type='submit'
                  className='m-2 shadow-sm px-3 py-2 w-full rounded-full text-white bg-gradient-to-r from-fuchsia-800 to-pink-800 hover:from-purple-900 hover:to-pink-900'
                >
                  Submit
                </button>
                {requestError && (
                  <span className='m-2 w-full inline-flex justify-center items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800'>
                    {requestError}
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
