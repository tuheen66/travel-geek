import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DetailBlog = () => {
  const { user } = useContext(AuthContext);
  const name = user?.displayName;
  const profilePic = user?.photoURL;

  const { id } = useParams();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://blog-website-server-ten.vercel.app/blog/${id}`
      );
      return res.data;
    },
  });

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://blog-website-server-ten.vercel.app/comment/${id}`
      );

      return res.data;
    },
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    const blogItem = {
      comment,
      name,
      profilePic,
      blogId: id,
    };

    axios
      .post("https://blog-website-server-ten.vercel.app/comments", blogItem)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="lg:w-8/12 mx-auto space-y-4 mb-12">
        <img className="mt-12" src={blogs.image} alt="" />
        <h2 className="text-2xl font-bold"> {blogs.title}</h2>
        <p>
          <span className="font-bold">Short description:</span>{" "}
          {blogs.short_description}
        </p>
        <p className="text-justify">
          <span className="font-bold"> Long description:</span>
          {blogs.long_description}{" "}
        </p>
      </div>
      <div
        className={
          user?.email !== blogs.email ? "hidden" : " flex justify-around mb-8"
        }
      >
        <p className="italic font-semibold mb-8 text-red-400">
          Blog writer cannot comment on his/her own blog
        </p>
        <Link to={`/update-blog/${blogs._id}`}>
          <button className="btn btn-accent">Update</button>
        </Link>
      </div>

      <div
        className={
          user?.email === blogs.email
            ? "hidden"
            : "md:w-1/2 lg:w-1/3 mb-12 block"
        }
      >
        <form
          onSubmit={handleCommentSubmit}
          className="flex flex-col space-y-4 w-full"
        >
          <label className="font-bold" htmlFor="long_description">
            Your Comment:
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full"
            name="comment"
            rows="4"
            required
          ></textarea>
          <button className="btn btn-accent lg:w-1/2 btn-sm ">Submit</button>
        </form>
      </div>

      <div>
        <h2 className="font-bold mb-4">All comments:</h2>

        {comments.map((comment) => (
          <div
            className=" border-b border-gray-300 lg:w-1/3 mb-4 p-2"
            key={comment._id}
          >
            <div>
              <div className="flex gap-4 mt-4 items-center">
                <h2>{comment.name}</h2>
                <img
                  className="w-12 rounded-full"
                  src={comment.profilePic}
                  alt=""
                />
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailBlog;
