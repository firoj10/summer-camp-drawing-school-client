

const PopularClassard = ({classe}) => {
    return (
    
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">

<figure><img src={classe?.classphoto} alt="Shoes" /></figure>
<div className="card-body">
 <h2 className="card-title"> Class Name:{classe.classname}</h2>
 <p> Price:{classe.price}</p>
 <p>  Seats:{classe.availableseats}</p>


</div>
</div>
    );
};

export default PopularClassard;