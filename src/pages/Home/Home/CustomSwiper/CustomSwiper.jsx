import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from './../../../../assets/blog/blog-1.jpg';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import './CustomSwiper.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CustomSwiper = () => {
  return (
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
        <SwiperSlide >
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="card md:w-96  text-left custom-shadow m-6  p-5">
              <figure><img src={img1} alt="Shoes" className='mask mask-circle w-[100px] h-[100px]' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Jenirar
                
                </h2>
                <div className="badge badge-outline">Fashion</div>
                <div className="rating">
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" checked />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                  <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        
     
       

      </Swiper>


      <div className="swiper-button-prev rounded-3xl p-4"></div>
      <div className="swiper-button-next rounded-3xl p-2 h-[10px] w-[10px]"></div>
    </div>
  

  );
};

export default CustomSwiper;
