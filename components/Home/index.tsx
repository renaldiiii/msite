import Link from "next/link";
import Image from "next/image";
import { items } from "@/data";
import Tools from "./Tools";
import FooterSection from "../Footer";
import Logos from "../../public/logos.png";

export default function HomePage() {
  return (
    <>
      <section className="h-screen max-w-7xl mx-auto sm:max-w-lg lg:max-w-screen-lg">
        <div className="flex h-24 items-center justify-between mx-auto">
          <a href="#" className="ml-2">
            <Image src={Logos} width={35} height={1} alt="Renaldi" />
          </a>
          <div className="flex items-center gap-10 text-color-3 text-base font-bold mr-6">
            {items.map((nav, i) => (
              <Link key={i} href="#">
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between px-4 mt-10 lg:flex-row">
          <div className="flex flex-col">
            <div className="flex flex-col text-color-4 gap-1 text-justify">
              <h2 className="text-xl font-semibold">Front End Developer</h2>
              <h1 className="text-3xl font-bold whitespace-nowrap tracking-tight text-color-3">
                Hi, I'm Renaldi
              </h1>
              <div className="mt-3 max-w-xs ">
                <p>
                  I'm Front End Developer, currently base in Cilegon Indonesia.
                  This is my site, where i blog and share whatever side project
                  I've been working on.
                </p>
                <p className="mt-4">
                  Bringing designs and ideas to life, and always doing my best
                  to make experience both{" "}
                  <span className="font-bold">accessible</span> and{" "}
                  <span className="font-bold">memorable</span> to the end user
                </p>
              </div>
            </div>
          </div>
          <Tools />
        </div>
        <FooterSection />
      </section>
    </>
  );
}
