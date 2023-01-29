import Image from "next/image";

const Portfolio = () => {
  return (
    <>
    <div className="max-w-3xl mx-auto mt-12 mb-20 ">
        <h2 className="text-xl font-semibold md:text-3xl ">My Porjects</h2>
        <p className="py-2 mx-auto text-sm text-gray-800 md:text-lg">
          I am comfortable working with Javascript, Python, HTML and CSS. Next
          Js and Tailwind would be my stack of choice to face any Front end
          project. I have knowledge in Blockchain development with Solidity and
          Moralis{" "}
        </p>
        
      </div>
      <div className="flex flex-col items-center gap-8 py-10 lg:px-8 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3">
          <Image className="object-cover rounded-lg" src={"/web1.png"} width={800} height={800} />
        </div>
        <div className="flex-1 basis-1/3">
          <Image className="object-cover rounded-lg" src={"/web2.png"} width={800} height={800} />
        </div>
        <div className="flex-1 basis-1/3">
          <Image className="object-cover rounded-lg" src={"/web3.png"} width={800} height={800} />
        </div>
        <div className="flex-1 basis-1/3">
          <Image className="object-cover rounded-lg" src={"/web4.png"} width={800} height={800} />
        </div>
        <div className="flex-1 basis-1/3">
          <Image className="object-cover rounded-lg" src={"/web5.png"} width={800} height={800} />
        </div>
        <div className="flex-1 basis-1/3">
          <Image className="object-cover rounded-lg" src={"/web6.png"} width={800} height={800} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
