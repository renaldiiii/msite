import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/data";

export default function FooterSection() {
  return (
    <>
      <footer className="bottom-0 fixed flex sm:w-2/3 mobile:w-full items-center justify-between px-4">
        <span className="text-xs font-extarlight text-muted-foreground text-color-4 pb-10">
          &copy;2024 Renaldi
        </span>
        <div className="flex items-center gap-5 pb-10">
          {Footer.map((image, i) => (
            <Link href="#" key={i}>
              <Image src={image.img} alt={image.alt} width={25} height={1} />
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
