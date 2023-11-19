
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const WishList = () => {

    const { user } = useContext(AuthContext)

    const [wishes, setWishes] = useState([])

    // user specific wishlist

    const url = `https://blog-website-server-ten.vercel.app/wish?email=${user.email}`

    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setWishes(data))
    }, [url])


    // send specific blog to the detail page




    // remove from wishlist

    const handleRemove = _id => {
        console.log(_id)
        fetch(`https://blog-website-server-ten.vercel.app/wish/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {

                    const remaining = wishes.filter(wish => wish._id !== _id)

                    setWishes(remaining)
                }
            })
    }




    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">

                {wishes?.map(wish =>
                    <div key={wish._id} className="card xl:card-side bg-blue-100 shadow-xl pl-2 mb-8">
                        <figure><img id="image" src={wish.image} /></figure>
                        <div className="card-body ">
                            <h2 id='title' className="card-title">{wish.title}</h2>
                            <p id="short_des" ><span className="font-bold">Short description:</span > {wish.short_description}</p>
                            <p id="category" ><span className="font-bold">Category:</span> {wish.category}</p>
                            <div className=" flex gap-4 ">

                                <button className="btn btn-primary btn-sm">Details</button> <br />
                                <button onClick={() => handleRemove(wish._id)} className="btn btn-secondary btn-sm">Remove</button>
                            </div>
                        </div>
                    </div>

                )}
            </div>


        </div>
    );
};

export default WishList;