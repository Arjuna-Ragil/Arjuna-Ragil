import Image from "next/image";
import ProfileBg from "./3js/profileBg";
import ProfileRoom from "./profileRoom";
import ProfileScreen from "./subcomponent/profileScreen";

export default function Profile(){
    return(
        <div className="min-h-screen h-full w-full" id="profile">
            <ProfileRoom/>
            <ProfileBg/>
            <ProfileScreen/>
        </div>
    )
}