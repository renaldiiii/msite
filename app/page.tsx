import Link from "next/link";
import Header from "@/components/Header/index";
import Tools from "@/components/Tool";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
      {/* <Header />
      <Tools /> */}

      <div className="mx-44">
        <HomePage />
      </div>
    </>
  );
}
