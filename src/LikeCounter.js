import { useState } from "react";

function LikeCounter() {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleToggle = () => {
    if (like) {
      setLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setLike(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div>
      <p>{like ? "❤️" : "🖤"} You have {likeCount} {likeCount === 1 ? "like" : "likes"}</p>
      <button onClick={handleToggle}>
        {like ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikeCounter;
