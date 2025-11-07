import MainBg from "./component/3js/mainBg";
import Exp from "./component/exp";
import Footer from "./component/footer";
import Home from "./component/home";
import Profile from "./component/profile";
import Projects from "./component/projects";
import TechStack from "./component/techstack";
import Title from "./component/title";

export default function Main(){
    return(
        <>
            <MainBg/>
            <Title/>
            <Home/>
            <Profile type={1}/>
            <Profile type={2}/>
            <Profile type={3}/>
            <TechStack/>
            <Exp/>
            <Projects type={1}/>
            <Projects type={2}/>
            <Projects type={3}/>
            <Footer/>
        </>
    )
}