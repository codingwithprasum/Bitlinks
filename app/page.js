import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col gap-4 items-end justify-center">
        <p className="text-2xl font-bold">
        The Best URL shortener in the Market. 
        </p>
        <p>
          We are the most straightforward URL Shortener in the world.
        </p>
      </div>
      <div className="flex justify-start relative">
        <Image className="mix-blend-darken" alt="an Image of an vector" src={"/vector.png"} fill={true} />
      </div>
      </section>
    </main>
  )}
