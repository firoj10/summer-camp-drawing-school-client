
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/ex2.jpg'
import img6 from '../../../assets/ex.jpg'
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full md:h-[600px] mx-auto "
      >
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='w-5/12 px-2'>
              <img src={img1} alt="" />
            </div>
            <div className='w-7/12 px-4'>
              <h2 className='text-4xl text-center py-5 font-bold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur alias, voluptates ipsam culpa amet nisi doloremque eius at magnam quibusdam delectus veniam, ex esse laudantium facilis cum reprehenderit totam facere praesentium magni nihil? Eum blanditiis natus deleniti veniam quis laboriosam reprehenderit, explicabo sed nihil repellendus placeat, iusto illo, veritatis fuga odit vel adipisci hic aspernatur debitis perspiciatis nam quas.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='w-5/12 px-2'>
              <img src={img2} alt="" />
            </div>
            <div className='w-7/12 px-4'>
              <h2 className='text-4xl text-center py-5 font-bold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur alias, voluptates ipsam culpa amet nisi doloremque eius at magnam quibusdam delectus veniam, ex esse laudantium facilis cum reprehenderit totam facere praesentium magni nihil? Eum blanditiis natus deleniti veniam quis laboriosam reprehenderit, explicabo sed nihil repellendus placeat, iusto illo, veritatis fuga odit vel adipisci hic aspernatur debitis perspiciatis nam quas.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='w-5/12 px-2'>
              <img src={img3} alt="" />
            </div>
            <div className='w-7/12 px-4'>
              <h2 className='text-4xl text-center py-5 font-bold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur alias, voluptates ipsam culpa amet nisi doloremque eius at magnam quibusdam delectus veniam, ex esse laudantium facilis cum reprehenderit totam facere praesentium magni nihil? Eum blanditiis natus deleniti veniam quis laboriosam reprehenderit, explicabo sed nihil repellendus placeat, iusto illo, veritatis fuga odit vel adipisci hic aspernatur debitis perspiciatis nam quas.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='w-5/12 px-2'>
              <img src={img4} alt="" />
            </div>
            <div className='w-7/12 px-4'>
              <h2 className='text-4xl text-center py-5 font-bold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur alias, voluptates ipsam culpa amet nisi doloremque eius at magnam quibusdam delectus veniam, ex esse laudantium facilis cum reprehenderit totam facere praesentium magni nihil? Eum blanditiis natus deleniti veniam quis laboriosam reprehenderit, explicabo sed nihil repellendus placeat, iusto illo, veritatis fuga odit vel adipisci hic aspernatur debitis perspiciatis nam quas.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='w-5/12 px-2'>
              <img src={img5} alt="" />
            </div>
            <div className='w-7/12 px-4'>
              <h2 className='text-4xl text-center py-5 font-bold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur alias, voluptates ipsam culpa amet nisi doloremque eius at magnam quibusdam delectus veniam, ex esse laudantium facilis cum reprehenderit totam facere praesentium magni nihil? Eum blanditiis natus deleniti veniam quis laboriosam reprehenderit, explicabo sed nihil repellendus placeat, iusto illo, veritatis fuga odit vel adipisci hic aspernatur debitis perspiciatis nam quas.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='w-5/12 px-2'>
              <img src={img6} alt="" />
            </div>
            <div className='w-7/12 px-4'>
              <h2 className='text-4xl text-center py-5 font-bold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur alias, voluptates ipsam culpa amet nisi doloremque eius at magnam quibusdam delectus veniam, ex esse laudantium facilis cum reprehenderit totam facere praesentium magni nihil? Eum blanditiis natus deleniti veniam quis laboriosam reprehenderit, explicabo sed nihil repellendus placeat, iusto illo, veritatis fuga odit vel adipisci hic aspernatur debitis perspiciatis nam quas.</p>

            </div>
          </div>
        </SwiperSlide>
        >
       




      </Swiper>

    </div>
  );
};

export default Banner;