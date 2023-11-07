/* eslint-disable react/prop-types */


const AllBlogCard = ({blog}) => {

    const { title, image, category, short_description } = blog
    return (
        <div className="card card-side bg-blue-100 shadow-xl pl-2">
            <figure><img  src={image} /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <p>Category : {category}</p>
                <div className=" flex gap-4 ">
                    <button className="btn btn-primary btn-sm">Details</button> <br />
                    <button className="btn btn-secondary btn-sm">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default AllBlogCard;