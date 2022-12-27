import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import ImpPost from "../../components/impPost/ImpPost";
import MidPosts from "../../components/midPosts/MidPosts";
import Footer from "../../components/footer/Footer";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <MidPosts />
        <Sidebar />
      </div>
      <Footer/>
    </>
  );
}
