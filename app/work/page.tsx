import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkIndexContent from "@/components/WorkIndexContent";

export const metadata: Metadata = {
  title: "Our clients: DevNova",
  description: "Highlights of brand, web, and communication design work by DevNova.",
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
