import Image from "next/image";

export default function Polaroid() {
  return (
    <div className="flex h-fit w-auto rotate-12 flex-col gap-5 bg-white p-5 text-center duration-300 hover:scale-110 hover:z-20 hover:rotate-0 shadow-2xs hover:shadow-2xl">
      <div className="h-full w-full">
        <Image src={"/selfPic.svg"} alt="Arjuna Picture" height={300} width={300}/>
    	</div>
      <h2 className="text-2xl font-bold">Arjuna Ragil Putera</h2>
    </div>
  );
}
