import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiePolicyContent from "@/components/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy: DevNova",
  description: "Which cookies devnova.com.ar uses and how to manage your consent.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <CookiePolicyContent />
      </main>
      <Footer />
    </>
  );
}
