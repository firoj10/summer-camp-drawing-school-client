

const InstructorsCart = ({ instructor }) => {
    return (
     <div className="">
           <div className="card card-compact w-96 bg-base-100 shadow-xl ">

<figure><img src={instructor?.photo} alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title">{instructor.name}</h2>
    <p>{instructor.email}</p>
   
</div>
</div>
     </div>
    );
};

export default InstructorsCart;