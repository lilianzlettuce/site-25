"use client";

import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [angleX, setAngleX] = useState(-20);
  const [moveX, setMoveX] = useState(0);

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
          <div className="flex">
            <button onClick={() => setAngleX(angleX + 90)}
                  className="btn-3d-push-flat-right text-[18px]">
              Release the Rats
            </button>
            <button onClick={() => setMoveX(moveX + 20)}  
                  className="btn-3d-push-flat-right text-[18px]">
              Release the Rats
            </button>
          </div>

          {[...Array(5)].map((_, i) => {
            return (
              <div className="relative size-[var(--cube-md)] transform-3d perspective-[800px] -rotate-x-20 rotate-y-20 transition duration-600 hover:rotate-y-180"
                  style={{ top: -i * 0, left: i * 60, transform: `rotateX(${angleX}deg) rotateY(-${angleX}deg) translateX(${moveX}px)`, }}
                  key={i}>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-z-12 rotate-x-0 bg-amber-main border-2 border-black text-transparent">1</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-z-12 rotate-y-0 bg-dark-purple border-2 border-black text-transparent">2</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-x-12 rotate-y-90 bg-wisteria border-2 border-black text-transparent">3</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-x-12 -rotate-y-90 bg-wisteria border-2 border-black text-transparent">4</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-y-12 rotate-x-90 bg-light-purple border-2 border-black text-transparent">5</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-y-12 -rotate-x-90 bg-wisteria border-2 border-black text-transparent">6</div>
              </div>
            );
          })}

            <div className="relative cursor-pointer scale-200 m-[150px] size-20 transform-3d perspective-[500px] -rotate-x-20 rotate-y-20 transition duration-600 hover:rotate-y-180 active:scale-y-10">
              <div className="absolute w-24 h-24 translate-z-12 rotate-x-0 bg-amber-main text-transparent">1</div>
              <div className="absolute w-24 h-24 -translate-z-12 rotate-y-0 bg-dark-purple text-transparent">2</div>
              <div className="absolute w-24 h-24 translate-x-12 rotate-y-90 bg-wisteria text-transparent">3</div>
              <div className="absolute w-24 h-24 -translate-x-12 -rotate-y-90 bg-wisteria text-transparent">4</div>
              <div className="absolute w-24 h-24 -translate-y-12 rotate-x-90 bg-light-purple text-transparent">5</div>
              <div className="absolute w-24 h-24 translate-y-12 -rotate-x-90 bg-wisteria text-transparent">6</div>
            </div>

            <div className="relative m-[150px] size-20 transform-3d perspective-[500px] -rotate-x-20 rotate-y-20 transition duration-600 hover:rotate-y-180">
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-z-12 rotate-x-0 bg-amber-main border-2 border-black text-transparent">1</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-z-12 rotate-y-0 bg-dark-purple border-2 border-black text-transparent">2</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-x-12 rotate-y-90 bg-wisteria border-2 border-black text-transparent">3</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-x-12 -rotate-y-90 bg-wisteria border-2 border-black text-transparent">4</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-y-12 rotate-x-90 bg-light-purple border-2 border-black text-transparent">5</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-y-12 -rotate-x-90 bg-wisteria border-2 border-black text-transparent">6</div>
            </div>

            <div className="relative m-[150px] size-20 transform-3d perspective-[500px] -rotate-x-20 rotate-y-20 transition duration-1000 hover:rotate-y-180 hover:rotate-x-180">
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-z-12 rotate-x-0 border-4 border-black rounded-lg text-transparent">1</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-z-12 rotate-y-0 border-4 border-black rounded-lg text-transparent">2</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-x-12 rotate-y-90 border-4 border-black rounded-lg text-transparent">3</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-x-12 -rotate-y-90 border-4 border-black rounded-lg text-transparent">4</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-y-12 rotate-x-90 border-4 border-black rounded-lg text-transparent">5</div>
              <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-y-12 -rotate-x-90 border-4 border-black rounded-lg text-transparent">6</div>
            </div>
            
            <div className="relative left-[100px] size-20 transform-3d perspective-[500px] rotate-y-20 transition duration-600 hover:rotate-y-200">
              <div className="absolute w-24 h-24 translate-z-15 rotate-x-0 bg-sky-300/75">1</div>
              <div className="absolute w-24 h-24 -translate-z-15 rotate-y-0 bg-sky-300/75 ...">2</div>
              <div className="absolute w-24 h-24 translate-x-15 rotate-y-90 bg-sky-300/75 ...">3</div>
              <div className="absolute w-24 h-24 -translate-x-15 -rotate-y-90 bg-sky-300/75 ...">4</div>
              <div className="absolute w-24 h-24 -translate-y-15 rotate-x-90 bg-sky-300/75 ...">5</div>
              <div className="absolute w-24 h-24 translate-y-15 -rotate-x-90 bg-sky-300/75 ...">6</div>
            </div>
        </div>
      </main>
    </div>
  );
}
