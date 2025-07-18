import Image from "next/image";

export default function Polaroid() {
  return (
    <div className="flex h-fit w-auto rotate-12 max-md:-rotate-1 flex-col gap-5 bg-white p-5 text-center duration-300 md:hover:scale-110 md:hover:z-20 md:hover:rotate-0 shadow-2xs md:hover:shadow-2xl">
      <div className="h-full w-full">
        <Image src={"/selfPic.svg"} alt="Arjuna Picture" height={300} width={300}/>
    	</div>
      <h2 className="text-2xl font-bold">Arjuna Ragil Putera</h2>
    </div>
  );
}
