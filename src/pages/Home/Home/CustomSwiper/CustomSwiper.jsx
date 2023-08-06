import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from './../../../../assets/blog/blog-1.jpg';
import img2 from './../../../../assets/slider/c1.jpg';
import img3 from './../../../../assets/slider/c2.jpg';
import img4 from './../../../../assets/slider/c3.jpg';
import img5 from './../../../../assets/slider/c4.jpg';
import img6 from './../../../../assets/slider/c5.jpg';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import './CustomSwiper.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CustomSwiper = () => {
  return (

    
// Through a combination of lectures, readings, discussions, students will gain a solid foundation in educational psychology.
  <div>
     <div className='py-20 my-20'>
                <h2 className="text-4xl  font-bold  text-center">What Our Students Saying</h2>
                <p className=' py-2  text-center'>Through a combination of lectures, readings, discussions, students will gain a solid <br></br> foundation in educational psychology.</p>
            </div>
     <div className="custom-swiper-container relative md:mt-20">
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img2} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Rubina Jannat
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img3} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar Fariya
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img4} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shadiya Arfin
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img5} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Mira Jannat
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img6} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenifar Rabit
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                   Steve Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img5} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Sumi Jannat
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                
              </div>
            </div>
        </SwiperSlide>
       
        
     
       

      </Swiper>


      <div className="swiper-button-prev rounded-3xl p-4"></div>
      <div className="swiper-button-next rounded-3xl p-2 h-[10px] w-[10px]"></div>
    </div>
     </div>

   
  

  );
};

export default CustomSwiper;
