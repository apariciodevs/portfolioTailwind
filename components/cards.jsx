import Image from "next/image";


const Cards = () => {
    return ( <>
     {/* Cards */}
     <section className="flex flex-col items-center gap-6 lg:flex-row">
        <div className="p-10 my-8 text-center rounded-xl max-w-[400px] max-h-[500px] shadow-2xl  ">
            <div>
                <div className="inline-block p-4 bg-gradient-to-b from-sky-600 to-teal-100 rounded-xl ">
                <Image
                src={'/code.png'}
                width={100}
                height={100}
                />
                </div>
                <h3 className="pt-8 pb-2 text-lg font-semibold">Code</h3>
                <p className="py-2">Creating elegant and modern designs adapting to your brand</p>
                <h4 className="py-4 font-semibold text-blue-600">Coding Stack</h4>
                <p className="py-1 text-gray-800">Next Js</p>
                <p className="py-1 text-gray-800">Tailwind</p>
                <p className="py-1 text-gray-800">Node</p>
            </div>
        </div>
        <div className="p-10 my-8 text-center rounded-xl max-w-[400px] shadow-2xl  	">
            <div>
                <div className="inline-block p-4 rounded-xl bg-gradient-to-b from-blue-200 to-rose-200">
                <Image
                src={'/design.png'}
                width={100}
                height={100}
                />
                </div>
                <h3 className="pt-8 pb-2 text-lg font-semibold">Design</h3>
                <p className="py-2">Creating elegant and modern designs adapting to your brand</p>
                <h4 className="py-4 font-semibold text-blue-600">Design tools I use</h4>
                <p className="py-1 text-gray-800">Figma</p>
                <p className="py-1 text-gray-800">Vectonator</p>
                <p className="py-1 text-gray-800">idk</p>
            </div>
        </div>

        <div className="p-10 my-8 text-center rounded-xl max-w-[400px] shadow-2xl  	">
            <div>
                <div className="inline-block p-4 rounded-xl bg-gradient-to-b from-orange-300 to-rose-100">
                <Image
                src={'/consulting.png'}
                width={100}
                height={100}
                />
                </div>
                <h3 className="pt-8 pb-2 text-lg font-semibold">Consulting</h3>
                <p className="py-2">Creating elegant and modern designs adapting to your brand</p>
                <h4 className="py-4 font-semibold text-blue-600">Design tools I use</h4>
                <p className="py-1 text-gray-800">Figma</p>
                <p className="py-1 text-gray-800">Vectonator</p>
                <p className="py-1 text-gray-800">idk</p>
            </div>
        </div>
      </section></> );
}
 
export default Cards;