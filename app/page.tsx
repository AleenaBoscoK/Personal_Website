import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Next sections get added here, one at a time */}
      </main>
    </>
  );
}