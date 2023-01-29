import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Hero = () => {
  return (
    <>
    <section className="mb-20">
      <div className="px-10 text-center">
        <h2 className="py-2 text-4xl text-teal-500 md:text-6xl ">Facundo Aparicio</h2>
        <h3 className="py-2 text-xl md:text-3xl">Front end developer</h3>
        <p className="max-w-xl py-5 mx-auto leading-8 text-gray-700 text-medium md:text-xl">
          Hi there! I am a self taugth Front end developer looking for my first
          job in the industry.
        </p>
      </div>
      <div className="flex justify-center gap-12 text-2xl text-gray-700">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative mx-auto mt-12 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-60 h-60">
        <Image
          src={"/dev-ed-wave.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="max-w-3xl mx-auto mt-12 ">
        <h2 className="text-xl font-semibold md:text-3xl ">My skills</h2>
        <p className="py-2 mx-auto text-sm text-gray-800 md:text-lg">
          I am comfortable working with Javascript, Python, HTML and CSS. Next
          Js and Tailwind would be my stack of choice to face any Front end
          project. I have knowledge in Blockchain development with Solidity and
          Moralis{" "}
        </p>
        <p className="py-2 text-sm text-gray-800 md:text-lg">
          I am comfortable working with Javascript, Python, HTML and CSS. Next
          Js and Tailwind would be my stack of choice to face any Front end
          project. I have knowledge in Blockchain development with Solidity and
          Moralis{" "}
        </p>

       
      </div>
      </section>
    </>
  );
};

export default Hero;
<></>;
