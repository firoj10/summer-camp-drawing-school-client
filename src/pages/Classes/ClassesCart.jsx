const ClassesCart = ({ classe }) => {
    return (
        <div className="">
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">

                <figure><img src={classe?.classphoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">classname{classe.classname}</h2>
                    <p>Instructor name{classe.instructorname}</p>
                    <p>Available seats{classe.availableseats}</p>
                    <p>Price{classe.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Select Button</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClassesCart;