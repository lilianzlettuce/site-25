"use client";

import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [angleX, setAngleX] = useState(-20);
  const [moveX, setMoveX] = useState(0);

  const [currentDisplayNum, setCurrentDisplayNum] = useState(0);
  const displays = [
    {
      message: "1 >>insert file here",
      bg: "sunbeam",
      text: "black"
    },
    {
      message: "RATS RATS RATS RATS",
      bg: "red-500",
      text: "white"
    },
    {
      message: "hello friends.",
      bg: "purple",
      color: "green-200"
    },
    {
      message: "There is no redemption.",
      bg: "black",
      color: "white"
    },
  ]

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

        <div className="relative w-full min-h-screen py-[90px] bg-purple-200">
          <div className="flex px-[200px]">
            <div className="relative mx-[0px] w-fit h-full scale-200">
              <div className="relative block scale-x-100 scale-y-100 m-[15px] size-20 transform-3d perspective-[500px] -rotate-x-20 rotate-y-20 hover:-rotate-x-10 hover:rotate-y-10 transition duration-600 active:scale-y-10">
                <div className="p-2 absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] translate-z-12 rotate-x-0 bg-amber-main text-transparent">
                  <div className="w-[100%] h-[40%]">
                    {displays.map((display, i) => {
                      return (
                        <div key={i} className={`w-full h-full bg-${display.bg} text-wrap text-${display.text} ${currentDisplayNum != i && "hidden"}`}>
                          {display.message}
                          <div className="bg-red-500 text-green-200 text-white"></div>
                          {i == 2 && 
                            <button onClick={() => setCurrentDisplayNum(3)}
                                className="text-[16px] cursor-pointer p-1 m-1 bg-black text-white hover:bg-blue-600 active:scale-y-60">
                              .
                            </button>
                          }
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] -translate-z-12 rotate-y-0 bg-dark-purple text-transparent">2</div>
                <div className="absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] translate-x-12 rotate-y-90 bg-wisteria text-transparent">3</div>
                <div className="absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] -translate-x-12 -rotate-y-90 bg-wisteria text-transparent">4</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-y-12 rotate-x-90 bg-light-purple text-transparent">5</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-y-12 -rotate-x-90 bg-wisteria text-transparent">6</div>
              </div>
            </div>

            <div className="relative left-[45%] mx-[30px] w-fit h-full scale-200">
              <div className="relative block scale-x-200 scale-y-100 hover:scale-x-250 hover:scale-y-150 hover:-rotate-x-10 hover:-rotate-y-15 m-[15px] size-20 transform-3d perspective-[500px] -rotate-x-20 -rotate-y-20 transition duration-600">
                <div className="border-3d absolute p-3 flex items-center w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] translate-z-12 rotate-x-0 bg-purple-200/80">
                  <div className="bg-red-500 text-green-200 text-white bg-sunbeam bg-purple"></div>
                  <div className="w-full h-[90%]">
                    {displays.map((display, i) => {
                      return (
                        <div key={i} className={`w-full h-full bg-${display.bg} text-wrap text-${display.text} ${currentDisplayNum != i && "hidden"}`}>
                          {display.message}
                          {i == 2 && 
                            <button onClick={() => setCurrentDisplayNum(3)}
                                className="text-[16px] cursor-pointer p-1 m-1 bg-black text-white hover:bg-blue-600 active:scale-y-60">
                              Repent
                            </button>
                          }
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] -translate-z-12 rotate-y-0 bg-dark-purple text-transparent">2</div>
                <div className="border-3d absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] translate-x-12 rotate-y-90 bg-wisteria text-transparent">3</div>
                <div className="absolute w-[var(--cube-md)] h-[calc(var(--cube-md)*3/2)] -translate-x-12 -rotate-y-90 bg-wisteria text-transparent">4</div>
                <div className="border-3d absolute w-[var(--cube-md)] h-[var(--cube-md)] -translate-y-12 rotate-x-90 bg-light-purple text-transparent">5</div>
                <div className="absolute w-[var(--cube-md)] h-[var(--cube-md)] translate-y-12 -rotate-x-90 bg-wisteria text-transparent">6</div>
              </div>
            </div>
          </div>

          <div className="relative mt-[300px] ml-[300px] w-[700px] h-[300px]">
            <div
              className="z-10 absolute floor-3d-flat-right w-full h-full flex">
                <div className="w-1/2 h-1/2 m-12 bg-amber-200"></div>
                <div className="w-1/2 h-1/2 m-12 bg-amber-200"></div>
            </div>
            <div className="grid grid-cols-3">
              <button onClick={() => setCurrentDisplayNum(1)}
                    className="z-20 btn-3d-push-flat-right text-[18px]">
                Release the Rats
              </button>
              <button onClick={() => setCurrentDisplayNum(2)}  
                    className="z-20 btn-3d-push-flat-right text-[18px]">
                Option #2
              </button>
              <button onClick={() => setCurrentDisplayNum(0)}  
                    className="z-20 btn-3d-push-flat-right text-[18px]">
                Switch
              </button>
              <button onClick={() => setMoveX(moveX + 20)}  
                    className="z-20 col-span-2 btn-3d-push-flat-right text-[18px]">
                Money
              </button>
            </div>
          </div>
        </div>

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

            <div className="relative m-[150px] size-20 transform-3d perspective-[500px] -rotate-x-20 rotate-y-20 transition duration-1000 hover:rotate-y-180 hover:rotate-x-180">
              <div className="absolute w-[var(--cube-sm)] h-[var(--cube-sm)] translate-z-12 rotate-x-0 border-4 border-black rounded-lg text-transparent">1</div>
              <div className="absolute w-[var(--cube-sm)] h-[var(--cube-sm)] -translate-z-12 rotate-y-0 border-4 border-black rounded-lg text-transparent">2</div>
              <div className="absolute w-[var(--cube-sm)] h-[var(--cube-sm)] translate-x-12 rotate-y-90 border-4 border-black rounded-lg text-transparent">3</div>
              <div className="absolute w-[var(--cube-sm)] h-[var(--cube-sm)] -translate-x-12 -rotate-y-90 border-4 border-black rounded-lg text-transparent">4</div>
              <div className="absolute w-[var(--cube-sm)] h-[var(--cube-sm)] -translate-y-12 rotate-x-90 border-4 border-black rounded-lg text-transparent">5</div>
              <div className="absolute w-[var(--cube-sm)] h-[var(--cube-sm)] translate-y-12 -rotate-x-90 border-4 border-black rounded-lg text-transparent">6</div>
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
