import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBlogs = () => {
  const navigate = useNavigate();

  const blogs = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const time = form.time.value;

    const updateBlog = {
      title,
      image,
      category,
      short_description,
      long_description,
      time,
    };

    fetch(`https://blog-website-server-ten.vercel.app/blogs/${blogs._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold my-4 text-center">Update your Blog</h2>

      <div className="w-1/2 mx-auto bg-green-200 p-8">
        <form onSubmit={handleUpdate}>
          <label htmlFor="title">Title:</label>
          <input
            className="w-full p-2"
            defaultValue={blogs.title}
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
            defaultValue={blogs.image}
            placeholder="Image URL "
            type="text"
            id="image_url"
            name="image"
            required
          />
          <br />
          <br />

          <label htmlFor="category">Category:</label>
          <select
            className="w-full p-2"
            id="category"
            defaultValue={blogs.category}
            name="category"
          >
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
            defaultValue={blogs.short_description}
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
            defaultValue={blogs.long_description}
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
            defaultValue={blogs.time}
            type="date"
            id="current_time"
            name="time"
            required
          />

          <input className="btn btn-primary" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogs;
