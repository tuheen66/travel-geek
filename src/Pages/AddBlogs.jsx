import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddBlogs = () => {
  const { user } = useContext(AuthContext);

  const email = user?.email;
  const name = user?.displayName;
  const profile_pic = user?.photoURL;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const time = form.time.value;

    const newBlog = {
      title,
      image,
      category,
      short_description,
      long_description,
      time,
      email,
      name,
      profile_pic,
    };

    console.log(newBlog);

    fetch("https://blog-website-server-ten.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    form.reset();
  };

  return (
    <div>
      <h2 className="text-3xl font-bold my-4 text-center">Add a new Blog</h2>

      <div className="lg:w-1/2 mx-auto bg-green-200 p-8">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            className="w-full p-2"
            placeholder="Title"
            type="text"
            id="title"
            name="title"
            required
          />
          <br />
          <br />

          <label htmlFor="image_url">Image URL:</label>
          <input
            className="w-full p-2"
            placeholder="Image URL "
            type="text"
            id="image_url"
            name="image"
            required
          />
          <br />
          <br />

          <label htmlFor="category">Category:</label>
          <select className="w-full p-2" id="category" name="category">
            <option value="Beach_Destinations">Beach Destinations</option>
            <option value="Mountain_Escapes">Mountain Escapes</option>
            <option value="Cultural_Experiences">Cultural Experiences</option>
            <option value="Wildlife_Encounters">Wildlife Encounters</option>
            <option value="Historical_Sites">Historical Sites</option>
            <option value="Island_Getaways">Island Getaways</option>
          </select>
          <br />
          <br />

          <label htmlFor="short_description">Short Description:</label>
          <textarea
            className="w-full p-2"
            id="short_description"
            name="short_description"
            rows="2"
            required
          ></textarea>
          <br />
          <br />

          <label htmlFor="long_description">Long Description:</label>
          <textarea
            className="w-full p-2"
            id="long_description"
            name="long_description"
            rows="4"
            required
          ></textarea>
          <br />
          <br />
          <label htmlFor="current_time">Current Time: </label>
          <input
            className="p-2 mr-4 "
            type="date"
            id="current_time"
            name="time"
            required
          />

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
