import Image from "next/image";
import { Navbar } from "@/data";
import hero from "../../public/no_background.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="relative bg-[#DCD7C9]">
        <div className="navbar absolute flex justify-end text-[#2C3639] font-extrabold text-xl py-5 w-full space-x-8 px-7">
          {Navbar.map((nav) => (
            <Link href={nav.link}>{nav.name}</Link>
          ))}
        </div>
        <div className="absolute mt-28 ml-20 space-y-5 text-gray">
          <div className="text-3xl font-semibold">Hi, I'm Renaldi</div>
          <div className="text-xl">
            I'm Front End Developer, <br></br> currently base in Cilegon
            Indonesia. This is my site,<br></br>where i blog and share whatever
            side project I've been working on.
          </div>
        </div>
        <Image src={hero} alt="#" className="h-screen" />
      </section>
    </>
  );
}
