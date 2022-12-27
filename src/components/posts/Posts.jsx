import Post from "../post/Post";
import "./posts.css";
import ImpPost from "../impPost/ImpPost";
import Post1 from "../post1/Post1"

export default function Posts() {
  return (
    <div className="parentBox">
    <div className="heading"><p>Indian News</p></div>
    <div className="posts">
      <Post1 img="./images/pic3.png" txt="Biden Goes Bonkers" />
      <Post1 img="./images/pic4.png" txt="Zelensky might start WW3"/>
      <Post1 img="./images/pic2.png" txt="Too much Uncertainity"/>
      <Post1 img="./images/pic2.png" txt="Too much Uncertainity"/>
    </div>
    </div>
    
  );
}
