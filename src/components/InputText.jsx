import { produceWithPatches } from 'immer';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://122.248.212.102:5001/";

export default function InputText({
  label,
  type,
  name,
  placeholder,
  register,
  validation,
  defaultValue,
  error
}) {

  
  const [checkError, setcheckError] = useState(null);
  const [Error, setError] = useState(null);
  const location = useLocation();

  const check = (e) => {
    if(e.target.name == 'email'){

      if(e.target.value !=='' && location.pathname =='/register'){
        checkEmail(e.target.value);
      }
      
    }
    if(e.target.name == 'username'){
      if(e.target.value !=='' && location.pathname =='/register'){
        checkUsername(e.target.value);
      }
      
    }
  }

  const checkEmail = (props) => {
     axios.get(baseURL+'check/email?email='+props).then((response) => {
      if(response?.data?.success === false){
        setcheckError(response?.data?.error?.message);
      }
    }).catch(error => {
      setError(error);
    });
  }

  const checkUsername = (props) => {
     axios.get(baseURL+'check/username?username='+props).then((response) => {
      if(response?.data?.success === false){
        setcheckError(response?.data?.error?.message);
      }
    }).catch(error => {
      setError(error);
    });
  }
  
  return (
    <div className='m-2 w-full'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-100 capitalize'
      >
        {label}
      </label>
      <div className='mt-1 w-full'>
        <input
          type={type}
          name={name}
          id={name}
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded h-10 px-4 py-2 bg-transparent border border-gray-400 focus:outline-none ${error && 'border-red-500'}`}
          placeholder={placeholder}
          {...(defaultValue && { defaultValue })}
          {...(register && register(name, { ...validation }))}
          onBlur={ (e) => check(e) }
        />
      </div>
          {checkError && (
        
                  <span className='m-2 w-full inline-flex justify-center items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800'>
                    {checkError}
                  </span>
          )}
    </div>
  );
}
