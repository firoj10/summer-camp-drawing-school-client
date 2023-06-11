
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
        </div>
    );
};

export default Home;