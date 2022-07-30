import React from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import {
  LogoutIcon,
  MenuIcon,
  PencilIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../services';
import { logOut, selectImage, selectState,selectUser } from '../slices/userSlice';

export default function Header({ isBg }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(selectState);
  const userImage = useSelector(selectImage);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!isLoggedIn) {
      if (location.pathname === '/'){
        navigate('/');
      }
      else if (location.pathname !== '/register' && location.pathname !== '/forgot-password' && location.pathname !== '/reset-password') {
        navigate('/login');
      } 
    } else if (
      location.pathname === '/login' ||
      location.pathname === '/register'
    ) {
      navigate('/');
    } 
    else {
      navigate('/'+location.pathname);
    }
  }, [isLoggedIn, location.pathname, navigate]);
  const handleLogout = () => {
    logout()
      .then((res) => {
        dispatch(
          logOut({
            user: '',
          })
        );
      })
      .catch((err) => {
        if(err.response.status === 401 || err.response.status ===404){
          dispatch(
            logOut({
              user: '',
            })
          );
        }
      });
  };
  return (
    <Popover
      className={`relative px-4 sticky top-0 z-50 ${
        isBg ? '' : 'bg-theme-header shadow'
      }`}
    >
      <div className='mx-auto max-w-7xl flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div>
          <Link to='/' className='flex'>
            <span className='sr-only'>MetaFrames</span>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://www.metaframes.io/wp-content/uploads/2021/12/Meta-Frames-01.png'
              alt=''
            />
          </Link>
        </div>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            type='text'
            name='name'
            id='name'
            className='block w-full pl-10 sm:text-sm border-gray-600 rounded-full h-8 bg-gray-700 text-white'
            placeholder='Search'
          />
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden md:flex-1 md:flex md:items-center md:justify-end'>
          <div className='flex items-center md:ml-12 gap-8'>
            <nav className='flex space-x-10'>
              <Link
                to='/'
                className='text-base font-medium text-gray-500 hover:text-gray-200'
              >
                Home
              </Link>
            </nav>
            <nav className='flex space-x-10'>
              <Link
                to='/explore'
                className='text-base font-medium text-gray-500 hover:text-gray-200'
              >
                Explore
              </Link>
            </nav>
            {/* <nav className='flex space-x-10'>
              <Link
                to='/'
                className='text-base font-medium text-gray-500 hover:text-gray-200'
              >
                Create
              </Link>
            </nav> */}
            <nav className='flex space-x-10'>
              {isLoggedIn ? (
                <Menu as='nav' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='inline-flex w-full items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      <img
                        src={userImage ? userImage : '/metaframe/img/house.jpg'}
                        alt='avatar'
                        className='w-10 h-10 rounded-full hover:scale-105'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-600 rounded-md bg-gray-800 shadow-lg ring-1 ring-black border border-gray-600 py-1 px-2 ring-opacity-5 focus:outline-none'>
                      <div className='px-1 py-1 '>
                        <Menu.Item>
                          <div className='group flex w-full items-center rounded-md px-2 py-2 text-sm text-white'>
                            <span>{user.name}</span>
                          </div>
                        </Menu.Item>
                      </div>
                      <div className='px-1 py-1 '>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={"/profile/" + user.id}
                              className={`${
                                active ? 'text-white' : 'text-gray-200'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <UserIcon
                                className='mr-2 h-7 w-7 rounded-full p-1 text-white bg-gray-700'
                                aria-hidden='true'
                              />
                              My Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={"/edit-profile/" + user.id}
                              className={`${
                                active ? 'text-white' : 'text-gray-200'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              <PencilIcon
                                className='mr-2 h-7 w-7 rounded-full p-1 text-white bg-gray-700'
                                aria-hidden='true'
                              />
                              Edit Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'text-white' : 'text-gray-200'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => handleLogout()}
                            >
                              <LogoutIcon
                                className='mr-2 h-7 w-7 rounded-full p-1 text-white bg-gray-700'
                                aria-hidden='true'
                              />
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  to='/login'
                  className='ml-8 inline-flex items-center justify-center px-8 py-2 rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-fuchsia-800 to-pink-800 hover:from-purple-900 hover:to-pink-900'
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </Popover>
  );
}
