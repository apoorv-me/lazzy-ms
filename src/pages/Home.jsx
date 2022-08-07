import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import 'swiper/css';
// import 'swiper/css/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import GalleryCard from "../components/GalleryCard";
import ExploreCMP from "../components/ExploreCMP";

export default function Home() {
  const [galleries, setGalleries] = useState([
    {
      id: 1,
      user: {
        id: "1",
        avatar: "img/house.jpg",
        username: "vandyne",
        verified: true,
        wallet: "0x0f78df",
      },
      name: "Heaven on Horizon",
      cover: "img/images.jpg",
      value: 33.98,
      currency: "ETH",
    },
    {
      id: 2,
      user: {
        id: "2",
        avatar: "img/mousefeatured.jpg",
        username: "vandyne",
        verified: true,
        wallet: "0x0f78df",
      },
      name: "Heaven on Horizon",
      cover: "img/render-water.jpg",
      value: 33.98,
      currency: "ETH",
    },
    {
      id: 3,
      user: {
        id: "3",
        avatar: "img/images.jpg",
        username: "vandyne",
        verified: true,
        wallet: "0x0f78df",
      },
      name: "Heaven on Horizon",
      cover: "img/images.jpg",
      value: 33.98,
      currency: "ETH",
    },
    {
      id: 4,
      user: {
        id: "4",
        avatar: "img/house.jpg",
        username: "vandyne",
        verified: true,
        wallet: "0x0f78df",
      },
      name: "Heaven on Horizon",
      cover: "img/house.jpg",
      value: 33.98,
      currency: "ETH",
    },
    {
      id: 5,
      user: {
        id: "5",
        avatar: "img/render-water.jpg",
        username: "vandyne",
        verified: true,
        wallet: "0x0f78df",
      },
      name: "Heaven on Horizon",
      cover: "img/render-water.jpg",
      value: 33.98,
      currency: "ETH",
    },
  ]);

  return (
    <>
      <div>
        <Spotlight />
        <TopGallaries galleries={galleries} />
        <ExploreCMP galleries={galleries} />
      </div>
    </>
  );
}

function Spotlight() {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        preloadImages
        spaceBetween={16}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center w-full h-full nft_pic relative">
            <div className="absolute left-3 bottom-3 z-20">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                MetaBoy
              </h3>
              <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
            </div>
            <div className="rounded-xl z-10 w-full h-full">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={"img/render-water.jpg"}
                alt="slide 1"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            role="list"
            className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoy
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/images.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoyfdas
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monddalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/mousefeatured.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoyds
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/render-water.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoy
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/house.jpg"}
                    alt="slide 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            role="list"
            className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoy
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/images.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoy
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/mousefeatured.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoy
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/render-water.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 divide-y divide-gray-200">
              <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
                <div className="absolute left-3 bottom-3 z-20">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    MetaBoy
                  </h3>
                  <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
                </div>
                <div className="rounded-xl z-10 w-full h-full">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={"img/house.jpg"}
                    alt="slide 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center w-full h-full relative nft_pic">
            <div className="absolute left-3 bottom-3 z-20">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                MetaBoy
              </h3>
              <p className="max-w-4xl text-sm text-gray-500">Monalisa</p>
            </div>
            <div className="rounded-xl z-10 w-full h-full">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={"img/render-water.jpg"}
                alt="slide 1"
              />
            </div>
          </div>
        </SwiperSlide>
        <div>
          <div className="swiper-button-prev">
            <ChevronLeftIcon className="h-16 w-16 text-white -ml-4" />
          </div>
          <div className="swiper-button-next">
            <ChevronRightIcon className="h-16 w-16 text-white -mr-6" />
          </div>
        </div>
      </Swiper>
    </>
  );
}

function TopGallaries({ galleries }) {
  return (
    <>
      <div className="my-16">
        <div className="mb-8 ">
          <h2 className="text-2xl font-semibold text-white text-center pb-4 relative">
            Top Galleries
            <span
              aria-hidden="true"
              className="mx-auto bg-fuchsia-500 absolute inset-x-0 bottom-0 h-0.5 w-10"
            />
          </h2>
        </div>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          preloadImages
          spaceBetween={16}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {galleries.map((gallery) => (
            <SwiperSlide key={gallery.id}>
              <GalleryCard gallery={gallery} />
            </SwiperSlide>
          ))}
          <div className="">
            <div className="swiper-button-prev">
              <ChevronLeftIcon className="h-16 w-16 text-white -ml-3" />
            </div>
            <div className="swiper-button-next">
              <ChevronRightIcon className="h-16 w-16 text-white -mr-3" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
