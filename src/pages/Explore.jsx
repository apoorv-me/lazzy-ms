import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import ExploreCMP from '../components/ExploreCMP';

export default function Explore() {
  const [galleries, setGalleries] = useState([
    {
      id: 1,
      user: {
        id: '1',
        avatar: 'img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: 'img/images.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 2,
      user: {
        id: '2',
        avatar: 'img/mousefeatured.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: 'img/render-water.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 3,
      user: {
        id: '3',
        avatar: 'img/images.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: 'img/images.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 4,
      user: {
        id: '4',
        avatar: 'img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: 'img/house.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 5,
      user: {
        id: '5',
        avatar: 'img/render-water.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: 'img/render-water.jpg',
      value: 33.98,
      currency: 'ETH'
    }
  ]);
  return (
    <>
      <div className='flex mx-auto max-w-sm'>
        <div className='mt-4 w-full relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            type='text'
            name='name'
            id='name'
            className='block w-full pl-3 sm:text-sm border-gray-600 rounded-full h-8 bg-gray-700 text-white'
            placeholder='Search for a space'
          />
        </div>
      </div>
      <ExploreCMP galleries={galleries} />
    </>
  );
}
