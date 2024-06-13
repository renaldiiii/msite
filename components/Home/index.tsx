import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/data";
import { Tool } from "@/data";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="flex h-24 items-center justify-between mx-6">
          <a>R.</a>
          <div className="flex items-center gap-10 text-color-3 text-base font-bold">
            {Navbar.map((nav) => (
              <Link href="#">{nav.name}</Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 mt-10">
          <div className="flex flex-col">
            <div className="flex flex-col text-color-4 gap-1">
              <h2 className="text-xl font-semibold">Front End Developer</h2>
              <h1 className="text-3xl font-bold whitespace-nowrap tracking-tight text-color-3">
                Hi, I'm Renaldi
              </h1>
              <div className="mt-3 max-w-xs text-justify">
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

          <div className="flex flex-col max-w-xs">
            <div className="flex items-center rounded-md px-2 py-2">
              <div className="flex items-center gap-2 flex-wrap justify-end mt-16">
                {Tool.map((tool) => (
                  <>
                    <div className="flex items-center rounded-md px-2 py-2 bg-white bg-opacity-10 ">
                      <Image
                        src={tool.img}
                        width={30}
                        height={1}
                        alt={tool.alt}
                      />
                      <span className="ml-2 text-color-4">{tool.name}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex h-20 w-full items-center justify-between">
        <span className="text-xs font-extarlight text-muted-foreground">
          &copy;2024 Renaldi
        </span>
        <div className="flex h-full items-center">
          <a>home</a>
          <a>home</a>
          <a>home</a>
        </div>
      </footer>
    </>
  );
}
