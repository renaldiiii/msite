import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/data";

export default function FooterSection() {
  return (
    <>
      <footer className="max-w-screen-xl mt-[10rem] xl:mt-[35rem] xl:max-h-screen flex w-full items-center justify-between px-4">
        <span className="text-xs font-extarlight text-muted-foreground text-color-4">
          &copy;2024 Renaldi
        </span>
        <div className="flex h-full items-center gap-5">
          {Footer.map((image) => (
            <Link href="#">
              <Image src={image.img} alt={image.alt} width={25} height={1} />
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
