export default function AboutMe() {
  return (
    <>
      <div className="absolute -z-10 flex h-full w-full rotate-3 flex-col border-1 border-black/20 bg-orange-200 p-5 shadow-lg"></div>
      <div className="flex xl:h-full h-full w-full -rotate-6 max-md:rotate-0 flex-col justify-center border-1 border-black/20 bg-yellow-200 p-5 shadow-xl duration-500 md:group-hover:absolute md:group-hover:translate-[50%] md:group-hover:scale-110 md:group-hover:rotate-0 md:hover:shadow-2xl">
        <h2 className="text-center 2xl:text-4xl xl:text-2xl text-base font-bold">About Me</h2>
        <br></br>
        <p className="text-justify 2xl:text-xl xl:text-lg text-xs">
          <b>Information System Student</b> at UIN Jakarta, Indonesia.
          <br></br> <br></br>
          Interested in software engineering, specifially{" "}
          <b>web and mobile development</b>. Also invested in making projects
          for hackathon.
          <br></br> <br></br>
          Currently learning about <b>web3 development</b>, blockchain, smart
          contract, and solidity. While seeking for internship.
        </p>
      </div>
    </>
  );
}
