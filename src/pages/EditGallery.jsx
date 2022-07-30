import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import InputText from '../components/InputText';
import ToggleSwitch from '../components/ToggleSwitch';
import { useForm } from 'react-hook-form';

export default function EditGallery() {
  const { id } = useParams();
  const [checked, setChecked] = useState(true);
  const [cover, setCover] = useState(
    'img/images.jpg'
  );

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='py-16 mx-auto max-w-2xl'>
        <div className='flex justify-start items-center gap-4'>
          <button className='text-gray-500 mx-2 py-1 px-2 rounded-sm border border-gray-500 shadow-sm'>
            <h2 className='text-xl text-center'>Gallery</h2>
          </button>
          <ToggleSwitch
            label='Live'
            checked={checked}
            setChecked={setChecked}
          />
        </div>
        <form
          id='edit-gallery'
          onSubmit={handleSubmit(onSubmit)}
          className='mt-6'
        >
          <div className='grid grid-cols-12 gap-4 sm:grid-cols-12 lg:grid-cols-12'>
            <div className='col-span-9'>
              {/* TODO set default value from gallery */}
              <InputText
                name='name'
                type='text'
                label={'Gallery Name'}
                placeholder='Enter Gallery Name'
                register={register}
                validation={{ required: true }}
                error={errors.name}
              />
              <InputText
                name='description'
                type='text'
                label={'Description'}
                placeholder='Enter description'
                register={register}
                validation={{ required: true }}
                error={errors.description}
              />
              <InputText
                name='message'
                type='text'
                label={'Welcome message'}
                placeholder='Enter welcome message'
                register={register}
                validation={{ required: true }}
                error={errors.message}
              />
              <div className='flex justify-start items-center gap-4'>
                <button
                  type='submit'
                  className='m-2 shadow-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-800 to-pink-800 hover:from-purple-900 hover:to-pink-900'
                >
                  Update Gallery
                </button>
                <button
                  type='submit'
                  className='m-2 shadow-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-gray-800'
                >
                  Delete Gallery
                </button>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='m-2 w-full'>
                <label
                  htmlFor={'profile-picture'}
                  className='block text-sm font-medium text-gray-100 capitalize'
                >
                  {'Gallery Cover'}
                </label>
                <div className='wrapper mt-1 w-full'>
                  <div className='btnimg w-full'>
                    <img className='h-full w-full rounded' src={cover} alt='' />
                    <span
                      className='absolute inset-0 shadow-inner rounded-full'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    name='cover'
                    type='file'
                    className='upload-file-input'
                    onChange={(e) =>
                      setCover(URL.createObjectURL(e.target.files[0]))
                    }
                    // {...register('cover')}
                  />
                </div>
                <div className='wrapper mt-1'>
                  <div className='btnimg w-36'>
                    <button
                      className='m-2 shadow-sm px-3 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-800 to-pink-800 hover:from-purple-900 hover:to-pink-900'
                      alt=''
                    >
                      Upload Music
                    </button>
                    <span
                      className='absolute inset-0 shadow-inner rounded-full'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    type='file'
                    name='music'
                    className='upload-file-input'
                    {...register('music')}
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
