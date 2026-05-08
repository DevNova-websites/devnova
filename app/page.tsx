import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import FormSection from "@/components/FormSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SpaceBackground from "@/components/SpaceBackground";
import ShootingStar from "@/components/ShootingStar";

export default function Home() {
  return (
    <>
      {/* ── Immersive space background (fixed, z-index 0) ── */}
      <SpaceBackground />

      {/* ── Cinematic shooting star (fixed, z-index 40) ─── */}
      <ShootingStar />

      {/* ── Site content (z-index 1, above canvas) ─────── */}
      <Navbar />
      <main className="content-layer">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <Benefits />
        <FormSection />
        <FAQ />
        <Contact />
      </main>
      <div className="content-layer"><Footer /></div>
      <FloatingCTA />
    </>
  );
}
