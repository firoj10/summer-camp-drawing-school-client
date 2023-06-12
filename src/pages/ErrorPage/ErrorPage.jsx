
import { Link, useRouteError } from 'react-router-dom';
import o from "./../../assets/err.png";


const ErrorPage = () => {
  const { error } = useRouteError();
  
  return (
    <div className="mx-auto text-center mt-5 pt-5">
      <div className="flex flex-col items-center">
        <img className="w-64" src={o} alt="Error" />
        <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
          {error?.message}
        </p>
        <Link to="/" className="btn bg-success text-light">
          Back to homepage
        </Link>
      </div>
      </div>
 
  );
};

export default ErrorPage;
