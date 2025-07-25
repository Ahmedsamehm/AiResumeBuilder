import Navbar from "./components/Navbar";

import Features from "./components/Features";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
