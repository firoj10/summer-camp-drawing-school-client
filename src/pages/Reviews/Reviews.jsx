
import img from '../../assets/ex2.jpg';

const Reviews = () => {
  return (
   <div className='py-14'>
      <h1 className='text-4xl text-center py-20'>Review Section</h1>
     <div className="md:flex ">
      <div>
        <img src={img} alt="Review" className="object-cover rounded-md" />
      </div>
      <div className="flex flex-col justify-center ml-4">
        <h1 className="text-5xl font-bold text-orange-900">Guardians of the Galaxy Vol. Dhaka and Happy Meal Toys Now Available at McDonald’s</h1>
        <p className="py-6">Each Happy Meal box includes one of eight superhero toys from the superhero toys baby toys and will be available for a limited time at participating restaurants nationwide, while supplies last.</p>
   
      </div>
    </div>
   </div>
  );
};

export default Reviews;