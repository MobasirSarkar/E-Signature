import { Footer } from "@/components/footer/footer";
import MainContent from "@/components/main-content";
import { Navbar } from "@/components/nav/nav-bar";

export default function Home() {
  return (
    <main
      className={`z-20 min-w-screen flex justify-center items-center flex-col`}
    >
      <Navbar />
      <MainContent />
      <Footer />
    </main>
  );
}
