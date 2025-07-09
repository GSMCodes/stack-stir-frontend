import Landing from "@/components/Landing"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar'

export default function LandingPage() {
  return (
    <main className="selection:bg-gray-500 selection:text-blue-200">
     <Navbar />
     <Landing />
     <HowItWorks />
     <Features />
     <Footer />
    </main>
  );
}
