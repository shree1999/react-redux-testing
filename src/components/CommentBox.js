import { useState } from "react";

export const CommentBox = () => {
  const [comment, setComment] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(comment);

    setComment((prevState) => "");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2 className="display-4 text-primary">Create a Comment</h2>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Write a comment"
          value={comment}
          onChange={(e) => setComment((prevState) => e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-raised mt-3">
        Submit Comment
      </button>
    </form>
  );
};
