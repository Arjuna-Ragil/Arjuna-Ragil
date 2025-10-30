import Image from "next/image";
import ProfileBg from "./3js/profileBg";

export default function Profile(){
    return(
        <div className="min-h-screen h-full w-full grid grid-cols-2" id="profile">
            <ProfileBg/>
            <div className="h-full w-full flex items-center justify-center flex-col">
                <h1 className="flex">Arjuna Ragil Putera</h1>
                <h2>Web Developer || Google Student Ambassador</h2>
                <p>Building beautiful and interactive digital experiences that feel alive.</p>
                <div>
                    <button>Download CV</button>
                    <a>Email</a>
                    <a>linkedin</a>
                    <a>Github</a>
                </div>
            </div>
            <div className="h-full w-full flex items-center justify-center">
                <div className="h-1/2 w-full flex items-center justify-center relative">
                    {/* <Image src={"/selfPic.svg"} alt="Arjuna" fill/> */}
                </div>
            </div>
        </div>
    )
}