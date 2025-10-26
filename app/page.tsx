import Image from "next/image";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <LandingPage />
      <About />
      <Pricing />
      <Contact /> 
    </main>
  );
}
