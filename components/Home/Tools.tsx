import Image from "next/image";
import { Tool } from "@/data";

export default function Tools() {
  return (
    <>
      <div className="flex flex-col max-w-xs">
        <div className="flex items-center rounded-md px-2 py-2">
          <div className="flex items-center gap-2 flex-wrap lg:justify-end mobile:justify-center mt-16">
            {Tool.map((tool) => (
              <>
                <div className="flex items-center rounded-md px-2 py-2 bg-white bg-opacity-10">
                  <Image src={tool.img} width={30} height={1} alt={tool.alt} />
                  <span className="ml-2 text-color-4">{tool.name}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
