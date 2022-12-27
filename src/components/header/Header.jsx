import "./header.css";
import ImpPost from "../../components/impPost/ImpPost";

export default function Header() {
  return (
    
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Daddy of all News Portal</span>
        <span className="headerTitleLg">The GodFather</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="./images/dark1.jpg"
        alt=""
      />
    </div>
  );
}
