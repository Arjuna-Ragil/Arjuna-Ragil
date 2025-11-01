export default function ProfileRoom(){
    return(
        <div className="h-screen w-screen flex flex-col -z-50 absolute">
            <div className="h-1/20 bg-black w-full z-10"></div>
            <div className="h-full w-full grid grid-cols-5 z-10">
                <div className="h-full w-full bg-black z-10"></div>
                <div className="h-full w-full backdrop-blur-xs"></div>
                <div className="h-full w-full border-x-10 border-black backdrop-blur-xs"></div>
                <div className="h-full w-full backdrop-blur-xs"></div>
                <div className="h-full w-full bg-black z-10"></div>
            </div>
            <div className="h-1/8 bg-black w-full z-10"></div>
        </div>
    )
}