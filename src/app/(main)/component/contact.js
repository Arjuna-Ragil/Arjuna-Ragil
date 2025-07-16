import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return(
        <div className="h-full w-full flex flex-row">
            <div className="h-full w-10 flex flex-col justify-evenly items-end relative">
                <div className="w-1/2 h-full bg-neutral-100 absolute border-t-2 border-b-4 border-l-2 border-amber-800 rounded-l-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
                <div className="w-full bg-black h-1 z-10 rounded-2xl shadow-2xl"></div>
            </div>
            <div className="h-full w-full text-gray-600 bg-neutral-100 border-t-2 border-b-4 border-r-4 border-amber-800 rounded-r-2xl p-10 flex flex-col gap-10 justify-between">
                <h2 className="text-2xl">
                    Boss Note: <br></br>
                    Contact this Person ASAP!
                </h2>
                <ul className="text-lg list-disc space-y-3">
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
                <Link href={"/"} className="flex self-center border-2 border-gray-950/50 w-fit p-2 hover:border-black duration-200">
                    Do The Work Now
                </Link>
            </div>
        </div>
    )
}