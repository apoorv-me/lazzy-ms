import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputText from '../components/InputText';
import { useForm } from 'react-hook-form';
import { logIn } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
import { signUp } from '../services';

export default function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [requestError, setRequestError] = useState(null);
  const defaultImages = [
    'img/house.jpg',
    'img/images.jpg',
    'img/mousefeatured.jpg',
    'img/render-water.jpg'
  ];
  const onSubmit = (data) => {
    data.isActive = true;
    data.profilePhotoeUrl = defaultImages[Math.floor(Math.random() * 4)];
    setRequestError(null);
    signUp(data)
      .then((res) => {
        dispatch(
          logIn({
            userId: res?.data?.data?.id,
            email: res?.data?.data?.email,
            profilePhotoeUrl: res?.data?.data?.image,
            isLoggedIn: true,
            name: res?.data?.data?.firstName + ' ' + res?.data?.data?.lastName,
            authToken: res?.data?.data?.access_token,
          })
        );
      })
      .catch((err) => {
        setRequestError(err.response.data?.error?.message);
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
          <div className='bg-gray-800 shadow p-12 w-96' style={{ marginTop:'93px'}}>
            <div className='flex items-center justify-start my-1'>
              <h1 className='text-white text-xl font-semibold'>Register</h1>
            </div>
            <div className='flex items-center justify-start my-1'>
              <p className='text-gray-300 text-sm'>
                Create a new account or login using an existing account{' '}
                <Link to='/login' className='text-red-500'>
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
                  name='firstName'
                  type='text'
                  placeholder='Firstname'
                  register={register}
                  validation={{ required: true }}
                  error={errors.firstName}
                />
                <InputText
                  name='lastName'
                  type='text'
                  placeholder='Lastname'
                  register={register}
                  validation={{ required: true }}
                  error={errors.lastName}
                />

                <InputText
                  name='userName'
                  type='text'
                  placeholder='Username'
                  register={register}
                  validation={{ required: true }}
                  error={errors.username}
                />

                <InputText
                  name='email'
                  type='email'
                  placeholder='Email'
                  register={register}
                  validation={{ required: true }}
                  error={errors.email}
                />

                <InputText
                  name='mobileNo'
                  type='number'
                  placeholder='Mobile Number'
                  register={register}
                  validation={{ required: true }}
                  error={errors.mobileNo}
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
          </div>
        </div>
      </div>
    </>
  );
}
