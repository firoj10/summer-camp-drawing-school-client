
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

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
            <div className='md:w-5/12 px-2'>
              <img src={img1} alt="" />
            </div>
            <div className='md:w-7/12 px-4'>

              <motion.h1
                   initial={{ opacity: 0, y: -50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 2 }}
              >
                <h2 className='text-4xl text-center py-5 font-bold'>Mastering Drawing: 5 Essential Techniques for Artistic Excellence</h2>
              </motion.h1>

              <p className=''>Dive into the world of drawing and unleash your creativity with these essential techniques. From mastering the art of shading to creating realistic textures, these techniques will bring your drawings to life. Explore different mediums, such as graphite and charcoal, and experiment with composition and perspective. With practice and dedication, youll develop your own unique style and create captivating artworks that leave a lasting impression</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='md:w-5/12 px-2'>
              <img src={img2} alt="" />
            </div>
            <div className='md:w-7/12 px-4'>
              <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 2 }}
              >
                <h2 className='text-4xl text-center py-5 font-bold'>Exploring Drawing Tools: From Pencils to Pens and Beyond</h2>

              </motion.h1>
              <p className=''>Step into the realm of drawing and embark on a creative adventure. Discover the magic of lines, shapes, and forms as you express your imagination on paper. Whether you prefer intricate details or bold strokes, these drawing techniques will help you refine your skills. Learn to capture the essence of your subjects, play with light and shadow, and convey emotions through your artwork. Let your pen or pencil be your guide on this artistic journey.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='md:w-5/12 px-2'>
              <img src={img3} alt="" />
            </div>
            <div className='md:w-7/12 px-4'>
            <motion.h1
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 2 }}
              >
              <h2 className='text-4xl text-center py-5 font-bold'>Unleash Your Creativity: 5 Exciting Drawing Techniques to Try</h2>

              </motion.h1>
              <p className=''>Unleash the power of your creativity with these five captivating drawing techniques. Explore the art of contour drawing, where lines define the shape and character of your subjects. Experiment with perspective to create depth and dimension in your artwork. Dive into the world of cross-hatching, a technique that adds texture and shading to your drawings. Discover the joy of blending colors and creating stunning gradients. Let your imagination run wild as you bring your drawings to life.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='md:w-5/12 px-2'>
              <img src={img4} alt="" />
            </div>
            <div className='md:w-7/12 px-4'>
            <motion.h1
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 2 }}
              >
              <h2 className='text-4xl text-center py-5 font-bold'>Discover the Power of Drawing Styles: Enhance Your Artistic Vision</h2>

              </motion.h1>
              <p className=''>Discover the joy of drawing and unlock your artistic potential with these five essential techniques. Learn the art of composition and create visually pleasing arrangements. Explore the beauty of negative space and balance in your drawings. Experiment with different mark-making techniques, from bold strokes to delicate details, and discover your unique style. Dive into the world of color and explore the emotions it can evoke. Let your drawings tell stories and inspire others with your creativity.</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='md:w-5/12 px-2'>
              <img src={img5} alt="" />
            </div>
            <div className=' md:w-7/12 px-4'>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              >
              <h2 className='text-4xl text-center py-5 font-bold'>Drawing Delights: Unlocking Secrets of Diverse Artistic Techniques</h2>

              </motion.h1>
              <p className=''>Explore the world of drawing and embark on a creative journey with these five fundamental techniques. Learn to observe and capture the essence of your subjects with accurate proportions and gestures. Discover the power of value and contrast to bring depth and dimension to your drawings. Experiment with different textures and surfaces to add interest and realism. Delve into the world of mixed media and combine different materials for unique effects. Let your creativity soar as you master the art of drawing</p>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex gap-2 content-center items-center  md:pt-28 '>
            <div className='md:w-5/12 px-2'>
              <img src={img6} alt="" />
            </div>
            <div className='md:w-7/12 px-4'>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
              <h2 className='text-4xl text-center py-5 font-bold'>Unlock Your Creative Potential: Dive into the World of Drawing</h2>

              </motion.h1>
              <p className=''>Discover the enchanting world of drawing and unleash your creative potential. Through the power of lines, shapes, and forms, you can express your unique perspective and bring your imagination to life on paper. From sketching intricate details to exploring vibrant colors, drawing allows you to communicate ideas, emotions, and stories in a visual language. With practice and dedication, you ll develop your skills and discover your own artistic style. </p>

            </div>
          </div>
        </SwiperSlide>






      </Swiper>

    </div>
  );
};

export default Banner;