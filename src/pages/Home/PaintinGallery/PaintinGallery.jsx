import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from './../../../assets/1.jpg';
import img2 from './../../../assets/2.jpg';
import img3 from './../../../assets/3.jpg';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination]);

const PaintingGallery = () => {
  const imageVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className='my-10'>
      <div className='text-center py-20'>
        <h2 className='text-4xl'>Painting Gallery</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        style={{ height: '400px' }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img1}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img3}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img2}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img2}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img1}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img3}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img2}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img1}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={img3}
              className='rounded-xl object-cover'
              alt=''
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PaintingGallery;
