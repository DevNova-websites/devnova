import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkIndexContent from "@/components/WorkIndexContent";

export const metadata: Metadata = {
  title: "All work: DevNova Studio",
  description: "Full portfolio of brand, web, and communication design work by DevNova Studio.",
};

export default function WorkIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkIndexContent />
      </main>
      <Footer />
    </>
  );
}
