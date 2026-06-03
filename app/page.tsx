import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Friction } from "@/components/sections/friction";
import { Architecture } from "@/components/sections/architecture";
import { Workflow } from "@/components/sections/workflow";
import { InteractiveDemo } from "@/components/sections/interactive-demo";
import { Features } from "@/components/sections/features";
import { Comparison } from "@/components/sections/comparison";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { AuthModal } from "@/components/auth/auth-modal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Friction />
        <Architecture />
        <Workflow />
        <InteractiveDemo />
        <Features />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}

