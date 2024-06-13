import Image from "next/image";
import { Navbar } from "@/data";
import Hero from "../../public/no_background.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="relative bg-color-4">
        <div className="navbar absolute flex justify-end text-color-1 font-extrabold text-xl py-5 w-full space-x-8 px-7 xl:text-xl lg:text-base">
          {Navbar.map((nav) => (
            <Link href={nav.link}>{nav.name}</Link>
          ))}
        </div>
        <div className="absolute mt-28 ml-10 space-y-5 text-gray xl:space-y-4 xl:mt-36 lg:space-y-2 lg:mt-14 text-color-1">
          <div className="text-3xl font-semibold xl:text-4xl lg:text-xl">
            Hi, I'm Renaldi
          </div>
          <div className="text-xl xl:text-xl lg:text-base">
            I'm Front End Developer, <br></br> currently base in Cilegon
            Indonesia. This is my site,<br></br>where i blog and share whatever
            side project I've been working on.
          </div>
        </div>
        <Image src={Hero} alt="#" className="h-screen bg-cover bg-no-repeat" />
      </section>
    </>
  );
}
