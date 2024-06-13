import Image from "next/image";
import { Tool } from "@/data";

export default function Tools() {
  return (
    <section className="bg-color-4">
      <span className="flex justify-center py-5 text-[#2C3639] font-bold text-5xl">
        TOOLS
      </span>
      <div className="flex justify-center space-x-16">
        {Tool.map((tool) => (
          <Image
            src={tool.img}
            alt={tool.name}
            width={100}
            height={100}
            className="fill-black my-5"
          />
        ))}
      </div>
    </section>
  );
}
