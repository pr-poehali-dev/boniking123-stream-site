import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StreamSchedule from "@/components/StreamSchedule";
import AboutStreamer from "@/components/AboutStreamer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StreamSchedule />
        <AboutStreamer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
