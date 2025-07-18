import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return(
        <div className="h-full w-full flex flex-row max-md:flex-col">
            <div className="h-full w-10 max-md:h-3 max-md:w-full flex flex-col max-md:flex-row justify-evenly items-end relative">
                <div className="w-1/2 h-full max-md:h-1/2 max-md:w-full bg-neutral-100 absolute border-t-2 border-b-4 border-l-4 max-md:border-r-4 max-md:border-b-0 border-amber-800 rounded-l-2xl max-md:rounded-none shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="lg:w-full w-3 h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full max-md:h-full max-md:w-1 bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
            </div>
            <div className="h-full w-full text-gray-600 bg-neutral-100 border-t-2 max-md:border-t-0 border-b-4 border-r-4 max-md:border-l-4 border-amber-800 rounded-r-2xl max-md:rounded-r-none lg:p-10 p-5 flex flex-col lg:gap-10 gap-2 justify-between">
                <h2 className="lg:text-2xl text-lg">
                    Boss Note: <br></br>
                    Contact this Person ASAP!
                </h2>
                <ul className="lg:text-lg text-sm list-disc space-y-3">
                    <li>Phone: 0812-1794-2843</li>
                    <li>Email: arjunaragilputera@gmail.com </li>
                    <li>LinkedIn: linkedin.com/in/arjunaragilputera</li>
                    <li>Github: github.com/Arjuna-Ragil</li>
                </ul>
                <div className="flex flex-row justify-evenly items-center">
                    <a href="https://github.com/Arjuna-Ragil" target="_blank" rel="noopener noreferrer">
                        <Image src={"/githubLogo.svg"} alt="github" width={50} height={50} className="grayscale-100 hover:grayscale-0"/>
                    </a>
                    <a href="https://www.linkedin.com/in/arjunaragilputera/" target="_blank" rel="noopener noreferrer">
                    <Image src={"/linkedinLogo.svg"} alt="linkedin" width={50} height={50} className="grayscale-100 hover:grayscale-0"/>
                    </a>
                </div>
                <Link href={"/"} className="flex self-center text-center border-2 border-gray-950/50 w-fit p-2 hover:border-black duration-200">
                    Do The Work Now
                </Link>
            </div>
        </div>
    )
}