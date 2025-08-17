import "./styles.css";
import Button from "../Button/Button";
import { type FeedbackProps } from "./types";
// type FeedbackProps = {
//   like: number;
//   dislike: number;
//   onLike: () => void;
//   onDislike: () => void;
//   onReset: () => void;
// };

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  onReset,
}: FeedbackProps) {
  return (
    <div className="feedback_wrapper">
      <div className="buttonwithcount_container">
        <Button name="Like" onClick={onLike}>
          <img
            className="icon"
            src="https://wallpapers.com/images/hd/facebook-like-emoji-icon-vib2ngvvjil1edqr.jpg"
            alt="like"
          />
        </Button>
        <p className="count_like">{like}</p>
      </div>

      <div className="buttonwithcount_container">
        <Button name="Dislike" onClick={onDislike}>
          <img
            className="icon"
            src="https://purepng.com/public/uploads/thumbnail/red-dislike-symbol-emoji-agl.png"
            alt="dislike"
          />
        </Button>
        <p className="count_dislike">{dislike}</p>
      </div>

      <Button name="Reset Results" onClick={onReset} />
    </div>
  );
}

export default Feedback;
