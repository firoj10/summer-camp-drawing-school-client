

const PopularClassard = ({ classe }) => {
    return (
      <div className="">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img style={{ width: '900px', height: '300px' }} src={classe?.classphoto} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Class Name: {classe.classname}</h2>
            <p> Price: {classe.price}</p>
            <p> Seats: {classe.availableseats}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PopularClassard;