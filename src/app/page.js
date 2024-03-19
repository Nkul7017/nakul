import Image from "next/image";
import Hero from '@/componets/Hero'
import Projects from "@/componets/Projects";
import Skills from "@/componets/Skills";
import Experience from "@/componets/Experience";
import Footer from "@/componets/Footer";
export default function Home() {
  return (
  <>
  <div className="scroll-container">
  <div className="scroll-item"><Hero/></div>
  <div className="scroll-item"><Projects/></div>
   <div className="scroll-item"><Skills/></div>
  <div className="scroll-item"><Experience/></div>
  <div className="scroll-item"><Footer/></div>
  </div>
  </>
  );
}
