

import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import PaintingGallery from "../PaintinGallery/PaintinGallery";

import PopularInstructors from "../PopularInstructors/PopularInstructors";
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
          <PopularBlog></PopularBlog>
          <Reviews></Reviews>
         

        </div>
    );
};

export default Home;