'use client'

import { useProjectData } from "@/app/hooks/useProjectData";
import Image from "next/image";

export default function PicPriceDetail(){
  const { showDetail } = useProjectData()

  if (showDetail !== "PicPrice") return 

    return(
        <div className="w-full h-full flex items-center justify-center col-span-2 px-10 animate-dropDown origin-top">
          <div className="h-full w-full flex justify-center flex-col gap-5 bg-blue-200/10 rotate-z-1 -rotate-x-5 -rotate-y-15 scale-y-120 p-5 py-25 text-center text-white">
            <h3 className="text-2xl font-bold shadow-2xl">Project Details</h3>
            <div className="flex flex-row justify-evenly items-center">
              <Image src={"/project/ppDoc1.svg"} alt="picprice doc 1" width={300} height={300} className="aspect-video border-1 border-white"/>
              <Image src={"/project/ppDoc2.svg"} alt="picprice doc 2" width={300} height={300} className="aspect-video border-1 border-white"/>
            </div>
            <p>
              PicPrice is an AI-powered web application that allows users to upload or take a picture of a product and instantly 
              search for its average price across multiple online platforms.
            </p>
            <h4 className="text-xl font-semibold">Features</h4>
            <div className="grid grid-cols-2 gap-3">
              <p className="col-span-2 bg-blue-300/50 hover:bg-blue-300/80 duration-200 border-1 p-2">
                🔍 Image-Based Price Search <br></br>
                Upload an image or use your device camera to find product prices instantly.
              </p>
              <p className="bg-blue-300/50 hover:bg-blue-300/80 duration-200 border-1 p-2">
                🧠 AI-Powered Product Recognition <br></br>
                Utilizes AI to identify products from images.
              </p>
              <p className="bg-blue-300/50 hover:bg-blue-300/80 duration-200 border-1 p-2">
                💾 Search History <br></br>
                View and reprocess your past searches.
              </p>
              <p className="bg-blue-300/50 hover:bg-blue-300/80 duration-200 border-1 p-2">
                ❤️ Wishlist <br></br>
                Save your favorite products to your personal wishlist.
              </p>
              <p className="bg-blue-300/50 hover:bg-blue-300/80 duration-200 border-1 p-2">
                👤 User Accounts <br></br>
                Firebase Authentication for secure sign-in and sign-up.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold">Check It Out</h4>
              <div className="flex flex-row justify-evenly items-center">
                <a href="https://github.com/Arjuna-Ragil/PicPrice.git" target="_blank" rel="noopener noreferrer">
                  <div className="bg-black/20 hover:bg-black/50 duration-200 rounded-2xl flex flex-row gap-2 items-center p-3">
                    <Image src={"/githubLogo.svg"} alt="github" width={50} height={50} />
                    <p>Github Repo</p>
                  </div>
                </a>
                <p>OR</p>
                <a href="https://picprice-73be9.web.app/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-black/20 hover:bg-black/50 duration-200 rounded-2xl gap-2 flex flex-row items-center p-3">
                    <Image src={"/project/picPriceLogo.svg"} alt="picprice" width={50} height={50} />
                    <p>PicPrice Web</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}