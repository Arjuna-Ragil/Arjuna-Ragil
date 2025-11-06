import MainBg from "./component/3js/mainBg";
import Exp from "./component/exp";
import Filler from "./component/filler";
import Home from "./component/home";
import Profile from "./component/profile";
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
            <Filler/>
            <Filler/>
            <Filler/>
            <Filler/>
        </>
    )
}