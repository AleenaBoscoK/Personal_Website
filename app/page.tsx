import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        {/* Next sections get added here, one at a time */}
      </main>
    </>
  );
}