import FooterPage from "./FooterPage"
import HeroPage from "./HeroPage"
import Navbar from "./Navbar"
import ProjectPage from "./ProjectPage"
import TestimonialPage from "./TestimonialPage"

const MainPage = () => {
  return (
    <div className="bg-indigo-600">
        <Navbar />
        <HeroPage />
        <ProjectPage />
        <TestimonialPage/>
        <FooterPage />
    </div>
  )
}

export default MainPage