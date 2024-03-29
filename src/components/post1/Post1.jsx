import { Link } from "react-router-dom";
import "./post1.css";

export default function Post(props) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={props.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postDate">1 hour ago</span>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          {props.txt}
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
