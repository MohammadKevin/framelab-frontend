import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Preview />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}