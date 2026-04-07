import axios from "axios";
import { useState } from "react";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
