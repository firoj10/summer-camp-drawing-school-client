

import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";

import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {

    return (
        <div>
          <Banner></Banner>
          {/* <BannerA></BannerA> */}
          <PopularInstructors></PopularInstructors>
          <PopularClass></PopularClass>
          <Reviews></Reviews>

        </div>
    );
};

export default Home;