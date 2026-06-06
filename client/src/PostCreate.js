import axios from "axios";
import { useState } from "react";

export default function PostCreate() {
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://posts.com/posts", {
      title,
    });

    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=""
          />
        </div>
        <button className="">Submit</button>
      </form>
    </div>
  );
}
