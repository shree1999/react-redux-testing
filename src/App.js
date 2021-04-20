import { CommentBox } from "./components/CommentBox";
import { CommentList } from "./components/CommentList";

export const App = () => {
  return (
    <div className="container">
      <CommentBox />
      <CommentList />
    </div>
  );
};
