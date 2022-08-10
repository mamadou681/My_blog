import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mamadou");
  const history = useHistory();
  const [isAdding, setIsAdding] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsAdding(true);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <p>Add a new blog</p>
      <form onSubmit={handelSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>choose an author:</label>
        <select
          required
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Mamadou">Mamadou</option>
          <option value="Saliou">Saliou</option>
        </select>
        {!isAdding && <button>Add</button>}
        {isAdding && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
