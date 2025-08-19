import { useState } from "react";
import Feedback from "components/Feedback/Feedback";
import "./styles.css";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () => {
    setLike((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };

  const onReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework_07_page_wrapper">
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        onReset={onReset}
      />
    </div>
  );
}

export default Homework_07;
