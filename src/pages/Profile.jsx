import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryCard from '../components/GalleryCard';
import Popup from '../components/Popup';
import { getTheme } from '../services';
import { selectUser } from '../slices/userSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const {isLoggedIn} = useSelector(state => state.user);
  const profile = useSelector(selectUser);
  const { id } = useParams();
  // const [profile, setProfile] = useState({
  //   picture: 'https://gigaland.io/images/author_single/author_thumbnail.jpg',
  //   name: 'Monica Lucas',
  //   username: 'monicalucas',
  //   wallet: '0x0584034'
  // });
  const [galleries, setGalleries] = useState([
    {
      id: 1,
      user: {
        id: '1',
        avatar: '/metaframe/img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: '/metaframe/img/images.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 2,
      user: {
        id: '2',
        avatar: '/metaframe/img/mousefeatured.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: '/metaframe/img/render-water.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 3,
      user: {
        id: '3',
        avatar: '/metaframe/img/images.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: '/metaframe/img/images.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 4,
      user: {
        id: '4',
        avatar: '/metaframe/img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: '/metaframe/img/house.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 5,
      user: {
        id: '5',
        avatar: '/metaframe/img/render-water.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Heaven on Horizon',
      cover: '/metaframe/img/render-water.jpg',
      value: 33.98,
      currency: 'ETH'
    }
  ]);
  const [liked, setLiked] = useState([
    {
      id: 7,
      user: {
        id: '2',
        avatar: '/metaframe/img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Gallery L7',
      cover: '/metaframe/img/house.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 8,
      user: {
        id: '3',
        avatar: '/metaframe/img/images.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Gallery L8',
      cover: '/metaframe/img/images.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 10,
      user: {
        id: '4',
        avatar: '/metaframe/img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Gallery L10',
      cover: '/metaframe/img/house.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 11,
      user: {
        id: '5',
        avatar: '/metaframe/img/house.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Gallery L11',
      cover: '/metaframe/img/house.jpg',
      value: 33.98,
      currency: 'ETH'
    },
    {
      id: 12,
      user: {
        id: '11',
        avatar: '/metaframe/img/images.jpg',
        username: 'vandyne',
        verified: true,
        wallet: '0x0f78df'
      },
      name: 'Gallery L12',
      cover: '/metaframe/img/images.jpg',
      value: 33.98,
      currency: 'ETH'
    }
  ]);
  
  const [tabs, setTabs] = useState([
    { name: 'Gallaries', current: true },
    { name: 'Liked', current: false },
    { name: 'Create', current: false }
  ]);
  const [open, setOpen] = useState(false);
  const handleTabChange = (index) => {
    setTabs(tabs.map((tab, i) => ({ ...tab, current: i === index })));
  };
  return (
    <div className='py-5'>
      <div className='flex items-center space-x-5'>
        <div className='flex-shrink-0'>
          <div className='relative'>
            <img
              className='h-36 w-36 rounded-full'
              src={profile.profilePhotoeUrl ? profile.profilePhotoeUrl:'/metaframe/img/house.jpg'}
              alt=''
            />
            <span
              className='absolute inset-0 shadow-inner rounded-full'
              aria-hidden='true'
            />
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-white'>{profile.name}</h1>
          <p className='text-sm font-medium text-pink-700 py-1'>
            @{profile.username}
          </p>
          <div className='flex justify-start items-center gap-2 py-1'>
            {/* <p className='text-sm font-medium text-gray-400'>
              
            </p> */}
            {navigator && (
              <button
                type='button'
                className='py-0 px-1 bg-gray-700 text-white rounded'
                onClick={() => {
                  navigator.clipboard.writeText(profile.wallet);
                }}
              >
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='w-full my-5'>
        <nav className='flex mb-5' aria-label='Tabs'>
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.name}
              className={classNames(
                tab.current ? 'text-white' : 'text-gray-500',
                'mx-2 py-1 px-2 rounded-sm border border-gray-500 shadow-sm'
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => handleTabChange(tabIdx)}
            >
              <h2 className='text-xl text-center'>{tab.name}</h2>
            </button>
          ))}
        </nav>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Navigation]}
          preloadImages
          spaceBetween={16}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='flex items-center justify-center'
        >
          {tabs.filter((tab) => tab.current)[0].name === 'Gallaries' &&
            galleries &&
            galleries.map((gallery) => (
              <SwiperSlide key={gallery.id}>
                <GalleryCard gallery={gallery} />
              </SwiperSlide>
            ))}
          {tabs.filter((tab) => tab.current)[0].name === 'Liked' &&
            liked &&
            liked.map((gallery) => (
              <SwiperSlide key={gallery.id}>
                <GalleryCard gallery={gallery} />
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <div className='flex items-center justify-center h-48 w-full'></div>
            <button
              type='submit'
              className='shadow-sm px-12 py-4 rounded-full text-white bg-fuchsia-700 hover:bg-fuchsia-900'
              onClick={() => setOpen(true)}
            >
              Create New
            </button>
          </SwiperSlide>
          <div className=''>
            <div className='swiper-button-prev'>
              <ChevronLeftIcon className='h-16 w-16 text-white -ml-3' />
            </div>
            <div className='swiper-button-next'>
              <ChevronRightIcon className='h-16 w-16 text-white -mr-3' />
            </div>
          </div>
        </Swiper>
      </div>
      <Popup open={open} setOpen={setOpen} children={<Spaces />} />
    </div>
  );
}

function Spaces() {
  const [spaces, setSpaces] = useState([]);
  
  useEffect(() => {
    getTheme()
    .then((res) => {
      setSpaces(res?.data?.data)
    })
    .catch((err) => {
     if (err.response.status === 404){
          console.log(err?.response?.data?.error?.message);
      }
    });
  })
  const [tabs, setTabs] = useState([
    { name: 'Templates', current: true },
    { name: 'Collectible', current: false }
  ]);

  // const [spaces, setSpaces] = useState([
  //   {
  //     name: 'Metaframe HUB 1',
  //     image: 'https://gigaland.io/images/gallery/gallery-item-7.jpg'
  //   },
  //   {
  //     name: 'Metaframe HUB 2',
  //     image: 'https://gigaland.io/images/gallery/gallery-item-7.jpg'
  //   },
  //   {
  //     name: 'Metaframe HUB 3',
  //     image: 'https://gigaland.io/images/gallery/gallery-item-7.jpg'
  //   },
  //   {
  //     name: 'Metaframe HUB 4',
  //     image: 'https://gigaland.io/images/gallery/gallery-item-7.jpg'
  //   }
  // ]);

  const handleTabChange = (index) => {
    setTabs(tabs.map((tab, i) => ({ ...tab, current: i === index })));
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-white'>Spaces</h1>
      <div className='mb-4'>
        <div>
          <div className=''>
            <nav
              className='border-b border-gray-600 relative z-0 flex mb-2'
              aria-label='Tabs'
            >
              {tabs.map((tab, tabIdx) => (
                <button
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200',
                    'group relative min-w-0 flex-1 overflow-hidden py-2 px-4 text-sm font-medium text-center focus:z-10'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                  onClick={() => handleTabChange(tabIdx)}
                >
                  <h2 className='text-2xl font-semibold text-center mb-0'>
                    {tab.name}
                  </h2>
                </button>
              ))}
            </nav>
            <div className='mt-8 grid grid-cols-4 gap-4'>
              {spaces.map((space) => (
                <div className='col-span-1' key={space.name}>
                  <div className='flex flex-col items-center justify-center h-60 w-40  relative'>
                    <div
                      className='relative rounded-lg w-full h-full bg-fixed bg-center bg-cover bg-no-repeat'
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.01), rgba(255, 255, 255, 0.09) 70%, rgba(0, 0, 0, 0.8) 97%, rgba(0, 0, 0, 1)) 100%, url(${space.image})`,
                        boxShadow: 'inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -2px 3px rgba(0,0,0,0.3), 0 1px 1px rgba(0,0,0,0.9)'
                      }}
                    ></div>
                    <h2 className='absolute bottom-0 text-md text-white text-center w-full'>
                      {space.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
