import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ExploreCMP({ galleries }) {
  const [tabs, setTabs] = useState([
    { name: 'Latest Spaces', current: true },
    { name: 'Trending', current: false },
    { name: 'Most Popular', current: false }
  ]);

  const handleTabChange = (index) => {
    setTabs(tabs.map((tab, i) => ({ ...tab, current: i === index })));
  };
  return (
    <>
      <div className='my-8'>
        <nav
          className='mx-auto max-w-3xl relative z-0 rounded-lg shadow flex'
          aria-label='Tabs'
        >
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.name}
              className={classNames(
                tab.current
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200',
                'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => handleTabChange(tabIdx)}
            >
              <h2 className='text-lg font-semibold text-center'>{tab.name}</h2>
              <span
                aria-hidden='true'
                className={
                  tab.current
                    ? 'mx-auto bg-fuchsia-500 absolute inset-x-0 bottom-0 h-0.5 w-10'
                    : 'hidden'
                }
              />
            </button>
          ))}
        </nav>
        <div className='my-8'>
          <div
            role='list'
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
          >
            {galleries.map((gallery) => (
              <Link
                to={`/galleries/${gallery.id}`}
                className='col-span-1 rounded-xl bg-gray-800'
              >
                <div className='flex flex-col justify-center w-full h-full'>
                  <div className='w-full h-full relative'>
                    <img
                      className='w-full lg:h-40 md:h-32 object-cover rounded-t-xl'
                      src={gallery.cover}
                      alt='slide 1'
                    />
                  </div>
                  <div className='w-full'>
                    <div className='relative mb-1 -mt-6 rounded-full'>
                      <Link to={`/profile/${gallery.id}`}>
                        <img
                          src={gallery.user.avatar}
                          alt='avatar'
                          className='w-12 h-12 rounded-full hover:scale-105 hover:border-4  hover:border-fuchsia-700 mx-auto'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className='m-3'>
                    <h3 className='text-md leading-6 font-medium text-white'>
                      {gallery.name}
                    </h3>
                    <p className='text-sm font-medium text-gray-300'>
                      Creator: @{gallery.user.username}
                    </p>
                    <p className='text-sm font-medium text-fuchsia-700'>
                      {gallery.wallet}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* TODO load more button pagination with API */}
      </div>
    </>
  );
}
