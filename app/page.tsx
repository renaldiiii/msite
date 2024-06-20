import FooterSection from "@/components/Footer";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
      <div className="min-w-xl xl:mx-44 lg:mx-40">
        <section className="relative h-screen max-w-7xl mx-auto sm:max-w-lg lg:max-w-screen-lg">
          <HomePage />
          <FooterSection />
        </section>
      </div>
    </>
  );
}
