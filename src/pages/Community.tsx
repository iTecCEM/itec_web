import Navbar from "../components/GlobalComponents/Navbar.tsx";
import History from "../components/CommunityPage/History.tsx";
import MemojiBubbles from "../components/CommunityPage/MemojiBubbles.tsx";
import ProjectReel from "../components/CommunityPage/ProjectReel.tsx";
import "./CommunityPage.css";
import Footer from "../components/GlobalComponents/Footer.tsx";

function Community() {
  return (
    <>
      <Navbar/>
      <History/>
      <MemojiBubbles/>
      <ProjectReel/>
      <Footer/>
    </>
  );
}

export default Community;