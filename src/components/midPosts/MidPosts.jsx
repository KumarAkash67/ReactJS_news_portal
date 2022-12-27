import Post from "../post/Post";
import "./midPosts.css";
import Post1 from "../post1/Post1";

export default function MidPosts() {
  return (
    <div className="parentBox1">
    <div className="heading"><p>International News</p></div>
      <div className="midPosts">
          <Post1 img="./images/pic5.png" txt="Ukraine triggers Russia" />
          <Post1 img="./images/pic7.png" txt="Zelensky might start WW3"/>
          <Post1 img="./images/pic6.png" txt="Too much Uncertainity"/>
          <Post1 img="./images/pic8.png" txt="Too much Uncertainity"/>
      </div>
    </div>
  )
}
