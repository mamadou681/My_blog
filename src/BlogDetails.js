import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./BlogDetails.css";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handelDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by{blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
      <button onClick={handelDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
