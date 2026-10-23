import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy: DevNova",
  description: "How DevNova collects, uses and protects personal data on devnova.com.ar.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
