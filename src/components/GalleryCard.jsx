import { CogIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GalleryCard({ gallery }) {
  return (
    <div className='flex flex-col justify-center bg-gray-800 rounded-xl p-5 pt-8 gallery_pic relative'>
      <Link to={`/profile/${gallery.user.id}`}>
        <div className='absolute left-3 top-1 z-20 rounded-full hover:border-4  hover:border-fuchsia-700'>
          <img
            src={gallery.user.avatar}
            alt='avatar'
            className='w-12 h-12 rounded-full hover:scale-105'
          />
        </div>
      </Link>
      <Link to={`/galleries/${gallery.id}`}>
        <div className='rounded-xl z-10 w-full h-full hover:scale-105'>
          <img
            className='w-full h-80 object-cover rounded-xl '
            src={gallery.cover}
            alt='slide 1'
          />
        </div>

        <div className='mt-2'>
          <div className='flex justify-between inline'>
            <h3 className='text-md leading-6 font-medium text-white'>
              {gallery.name}
            </h3>
            <Link to={`/edit-gallery/${gallery.id}`}>
              <CogIcon className='h-5 w-5 text-white hover:text-gray-200' />
            </Link>
          </div>
          <p className='text-sm font-medium text-gray-300'>
            Creator: @{gallery.user.username}
          </p>
          <p className='text-sm font-medium text-fuchsia-700'>
            {gallery.currency}: {gallery.value}
          </p>
        </div>
      </Link>
    </div>
  );
}
