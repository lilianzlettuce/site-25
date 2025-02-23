import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#D97706" />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>  
      <main>
        <Hero />

        <div className="min-w-screen min-h-screen">
          <button style={{  }}
                className="relative transform-3d block box-border px-12 py-5 font-black text-black uppercase bg-white bottom-[15px]
                  transition duration-200 rotate-[25deg] rotate-x-[55deg] perspective-origin-bottom-left
                  perspective-[800px] active:bottom-0 
                  before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-[15px] before:bg-gray-200 before:transform before:-rotate-x-90 before:perspective-origin-top before:transition-[height] before:duration-200 
                  after:content-[''] after:absolute after:left-full after:top-0 after:w-[15px] after:h-full after:bg-gray-400 after:transform after:rotate-y-90 after:origin-left after:transition-[width] after:duration-200">
            Faux 3D Button
          </button>

          <button className="bg-amber-400 rotate-x-[55deg]"
              style={{ transform: "rotateX(55deg)" }}>
            hi
          </button>


          <div className="perspective-1000">
            <div className="size-20 transform-flat ...">
              <div className="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
              <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
              <div className="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
              <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
              <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
              <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
            </div>
          </div>
          <div className="perspective-[800px]">
            <div className="size-20 transform-3d ...">
              <div className="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div>
              <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div>
              <div className="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div>
              <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div>
              <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div>
              <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
