import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import InputText from '../components/InputText';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { deleteImage, getProfile, updateProfile, uploadImage } from '../services';
import { logOut } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
// import { DefaultImg} from '../../public/img/house.jpg'
export default function EditProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [proImg, setProImg] = useState('');
  const [error, seterror] = useState('');
  const [image,setImage] = useState('');
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
 
  const onSubmit =async (data) => {
    let socialLinks={
      website:data.website,
      twitter:data.twitter,
      instagram:data.instagram,
      facebook:data.facebook
    }
    let newdata={...data}
    newdata["socialLinks"]=socialLinks
    delete newdata.facebook
    delete newdata.instagram
    delete newdata.twitter
    delete newdata.website
    updateProfile(newdata)
    .then((res) => {
      setLoading(false);
      setMessage(res?.data?.data?.message);
    })
    .catch((err) => {
      if(err.response.status === 401){
        dispatch(
          logOut({
            user: '',
          })
        );
      } else if (err.response.status === 404){
          setLoading(false);
          seterror(err?.response?.data?.error?.message);
      }
      
    });
  };

// Fetch user record
  useEffect(() => {
    getProfile(id)
    .then((res) => {
      setLoading(false);
      setValue('id',res?.data?.data?.id);
      setValue('firstName',res?.data?.data?.firstName);
      setValue('lastName',res?.data?.data?.lastName);
      setValue('userName',res?.data?.data?.userName);
      setValue('email',res?.data?.data?.email);
      setValue('mobileNo',res?.data?.data?.mobileNo);
      setValue('website',res?.data?.data?.socialLinks?.website);
      setValue('twitter',res?.data?.data?.socialLinks?.twitter);
      setValue('instagram',res?.data?.data?.socialLinks?.instagram);
      setValue('facebook',res?.data?.data?.socialLinks?.facebook);
      setValue('image',res?.data?.data?.image);
      setImage(res?.data?.data?.image);
    })
    .catch((err) => {
      if(err.response.status === 401){
        dispatch(
          logOut({
            user: '',
          })
        );
      } 
      else if (err.response.status === 404){
          setLoading(false);
          seterror(err?.response?.data?.error?.message);
      }
      
    });
  },[id])

  // Image Delete and upload process
    if(proImg && image){
       deleteImage('users',image)
       .then((res) => {
      })
      .catch((err) => {
      if(err.response.status === 401){
        dispatch(
          logOut({
            user: '',
          })
        );
      } 
      else if (err.response.status === 404){
          setLoading(false);
          seterror(err?.response?.data?.error?.message);
      }
      
    });
    } else if(proImg){
        var formData = new FormData();
        formData.append('modelName','users');
        formData.append('data','dd');
       console.log(formData);
        uploadImage()
       .then((res) => {
      })
      .catch((err) => {
      if(err.response.status === 401){
        dispatch(
          logOut({
            user: '',
          })
        );
      } 
      else if (err.response.status === 404){
          setLoading(false);
          seterror(err?.response?.data?.error?.message);
      }
      
    });
    } 
  return (
    <>
      <div className='py-16 mx-auto max-w-2xl'>
        <button className='text-gray-500 mx-2 py-1 px-2 rounded-sm border border-gray-500 shadow-sm'>
          <h2 className='text-xl text-center'>Profile</h2>
        </button>
          
        <form
          id='edit-profile'
          className='mt-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='grid grid-cols-12 gap-4 sm:grid-cols-12 lg:grid-cols-12'>
            <div className='col-span-9'>

                <InputText
                  name='id'
                  type='hidden'
                  register={register}
                />

                <InputText
                  name='firstName'
                  type='text'
                  label={'First Name'}
                  placeholder='Firstname'
                  register={register}
                  validation={{ required: true }}
                  error={errors.firstName}
                  
        
                />
                <InputText
                  name='lastName'
                  type='text'
                  label={'Last Name'}
                  placeholder='Lastname'
                  register={register}
                  validation={{ required: true }}
                  error={errors.lastName}
                />

              <InputText
                name='userName'
                type='text'
                label={'Username'}
                placeholder='Enter Username'
                register={register}
                validation={{ required: true }}
                error={errors.userName}
              />
              <InputText
                name='email'
                type='email'
                label={'Email Address'}
                placeholder='Enter Email'
                register={register}
                validation={{ required: true }}
                error={errors.email}
              />

               <InputText
                  name='mobileNo'
                  type='number'
                  label={'Mobile'}
                  placeholder='Mobile'
                  register={register}
                  validation={{ required: true }}
                  error={errors.mobileNo}
                />

              <InputText
                name='website'
                type='url'
                label={'Your site'}
                placeholder='URL...'
                register={register}
                validation={{ required: true }}
                error={errors.website}
              />
              <InputText
                name='twitter'
                type='text'
                label={'Twitter'}
                placeholder='URL...'
                register={register}
                validation={{ required: true }}
                error={errors.twitter}
              />
              <InputText
                name='instagram'
                type='text'
                label={'Instagram'}
                placeholder='URL...'
                register={register}
                validation={{ required: true }}
                error={errors.instagram}
              />
              <InputText
                name='facebook'
                type='text'
                label={'Facebook'}
                placeholder='URL...'
                register={register}
                validation={{ required: true }}
                error={errors.facebook}
              />
              <button
                type='submit'
                className='m-2 shadow-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-800 to-pink-800 hover:from-purple-900 hover:to-pink-900'
              >
                Update Profile
              </button>
            </div>
            <div className='col-span-3'>
              <div className='m-2 w-full'>
                <label
                  htmlFor={'profile-picture'}
                  className='block text-sm font-medium text-gray-100 capitalize'
                >
                  {'Profile Image'}
                </label>
                <div className='wrapper mt-1 w-full'>
                  <div className='btnimg w-full'>
                    <img
                      className='h-full w-full rounded-full'
                      src='/metaframe/img/house.jpg'
                      alt=''
                    />
                    <span
                      className='absolute inset-0 shadow-inner rounded-full'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    name='profileImage'
                    type='file'
                    src='/metaframe/img/house.jpg'
                    className='upload-file-input'
                    onChange={(e) =>
                      setProImg(e.target.files[0])
                    }
                    // {...register('profileImage')}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
