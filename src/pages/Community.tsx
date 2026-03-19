import Navbar from "../components/GlobalComponents/Navbar.tsx";
import History from "../components/CommunityPage/History.tsx";
import MemojiBubbles from "../components/CommunityPage/MemojiBubbles.tsx";
import ProjectReel from "../components/CommunityPage/ProjectReel.tsx";

function Community() {
  return (
    <>
      <Navbar/>
      <History/>
      <MemojiBubbles/>
      <ProjectReel/>
    </>
  );
}

export default Community;