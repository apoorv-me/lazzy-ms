import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputText from '../components/InputText';
import { useForm } from 'react-hook-form';
import { logIn } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
import { login } from '../services';

export default function Login() {
  const dispatch = useDispatch();
  const [requestError, setRequestError] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  
  const onSubmit = (data) => {
    setRequestError(null);
    login(data)
      .then((res) => {
        dispatch(
          logIn({
            user: res?.data?.data,
          })
        );
      })
      .catch((err) => {
        setRequestError(err?.response?.data?.error?.message);
      });
  };

  return (
    <>
      <div
        className='relative h-screen -mt-24'
        style={{
          backgroundImage: `url(img/6.jpg)`
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-gray-800 shadow p-12 w-96'>
            <div className='flex items-center justify-start my-1'>
              <h1 className='text-white text-xl font-semibold'>Sign In</h1>
            </div>
            <div className='flex items-center justify-start my-1'>
              <p className='text-gray-300 text-sm'>
                Login using an existing account or create a new account{' '}
                <Link to='/register' className='text-red-500'>
                  here
                </Link>
                .
              </p>
            </div>
            <div className='flex items-center justify-start my-1 w-full'>
              <form
                id='login'
                className='w-full -ml-2 space-y-4'
                onSubmit={handleSubmit(onSubmit)}
              >
                <InputText
                  name='email'
                  type='email'
                  placeholder='Email'
                  register={register}
                  validation={{ required: true }}
                  error={errors.email}
                />
                <InputText
                  name='password'
                  type='password'
                  placeholder='Password'
                  register={register}
                  validation={{ required: true }}
                  error={errors.password}
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

            <div className='flex items-center justify-start my-1'>
              <p className='text-gray-300 text-sm'>
                Forgot Password {' '}
                <Link to='/forgot-password' className='text-red-500'>
                  here
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
