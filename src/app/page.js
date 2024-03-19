'use client'
import Hero from '@/componets/Hero'
import Projects from "@/componets/Projects";
import Skills from "@/componets/Skills";
import Experience from "@/componets/Experience";
import Footer from "@/componets/Footer";
import { useEffect, useState } from "react";
import Loader from "@/componets/Loader";
export default function Home() {
  const [loader,setLoader]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoader(!loader);
    }, 3000);
  },[])
  return (
  <>
  {loader?<Loader/>:
  <div className="scroll-container">
  <div className="scroll-item"><Hero/></div>
  <div className="scroll-item"><Projects/></div>
   <div className="scroll-item"><Skills/></div>
  <div className="scroll-item"><Experience/></div>
  <div className="scroll-item"><Footer/></div>
  </div>}
  </>
  );
}
