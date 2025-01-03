import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { Aoboshi_One } from "next/font/google";

const aoboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <div className={aoboshi.className}>
      <Navbar />
      <MainSection />
    </div>
  );
}
