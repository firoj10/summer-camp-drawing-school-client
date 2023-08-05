

import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import LatestArticles from "../LatestArticles/LatestArticles";
import PaintingGallery from "../PaintinGallery/PaintinGallery";

import PopularInstructors from "../PopularInstructors/PopularInstructors";
import CustomSwiper from "./CustomSwiper/CustomSwiper";
import PaintingBlog from "./PaintingBlog/PaintingBlog";
import PopularBlog from "./PopularBlog/PopularBlog";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {

    return (
        <div>
          <Banner></Banner>
          {/* <BannerA></BannerA> */}
          <PopularInstructors></PopularInstructors>
          <PopularClass></PopularClass>
          <PaintingGallery></PaintingGallery>
          <PaintingBlog></PaintingBlog>
          
          <CustomSwiper></CustomSwiper>
          <LatestArticles></LatestArticles>
          <Reviews></Reviews>
          <PopularBlog></PopularBlog>
         

        </div>
    );
};

export default Home;