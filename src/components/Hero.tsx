import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen gap-y-4">
        <div className="flex items-center justify-center">
            <div className="flex flex-col relative left-24">
                <Image className="w-7/12 h-fit relative"
                    src="/text/purdue-hackers-filled.svg"
                    alt="purdue hackers"
                    width={400}
                    height={400}
                />
                <div className="w-full mx-auto text-amber-500 relative top-4">
                    <p className="text-lg font-mono font-bold sm:text-xl">
                        a community of students who collaborate, learn, and build
                        kick-ass technical projects
                    </p>
                </div>
            </div>
            <Image className="w-7/12 h-fit relative left-24"
                src="/img/glider-cubes-x3.png"
                alt="glider cubes"
                width={400}
                height={400}
            />
        </div>
        <div className="w-10/12 hidden p-6 border-4 border-black rounded-xs shadow-blocks shadow-gray-800 bg-amber-400 lg:w-auto">
            <h1 className="text-6xl font-bold text-center sm:text-8xl lg:text-9xl">
                Purdue Hackers
            </h1>
        </div>
        <div className="hidden w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-xs shadow-blocks shadow-gray-800">
                <p className="text-lg font-bold sm:text-xl">
                    💛⚡️🧱 a community of students who collaborate, learn, and build
                    kick-ass technical projects
                </p>
            </div>
        </div>
    </div>
  );
};

export default Hero;