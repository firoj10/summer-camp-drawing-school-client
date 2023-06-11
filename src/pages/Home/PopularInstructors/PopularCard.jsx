

const PopularCard = ({popular}) => {
    return (
        <div className="">
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">

<figure><img src={popular?.photo} alt="Shoes" /></figure>
<div className="card-body">
 <h2 className="card-title">{popular?.name}</h2>
 <p>{popular?.email}</p>

</div>
</div>
  </div>
    );
};

export default PopularCard;