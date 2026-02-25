import Exp from "./component/exp";
import Footer from "./component/footer";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Profile from "./component/profile";
import Projects from "./component/projects";
import TechStack from "./component/techstack";

export default function Main() {
    return (
        <>
            <Navbar />
            <Home />
            <Profile />
            <TechStack />
            <Exp/>
            <Projects />
            <Footer />
        </>
    )
}