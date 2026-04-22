import { useState, useRef, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { Hero } from "./components/sections/Hero";
import { Specs } from "./components/sections/Specs";
import { Projects } from "./components/sections/Projects";
import { BoardDiagram } from "./components/arduino/BoardDiagram";
import { CodeExamples } from "./components/sections/CodeExamples";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/layout/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#00979C]/30 selection:text-[#00979C]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00979C] z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto space-y-24 py-8">
            
            <div id="overview">
              <Hero />
            </div>

            <div id="specifications">
              <Specs />
            </div>

            <div id="pinout" className="scroll-mt-24">
              <div className="flex flex-col mb-12">
                <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Wiring Map</span>
                <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Pin Configuration</h2>
                <p className="text-slate-400 mt-2">Interactive map of all connectivity points.</p>
              </div>
              <BoardDiagram />
            </div>

            <div id="programming" className="scroll-mt-24">
               <div className="flex flex-col mb-8">
                  <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Logic & Code</span>
                  <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Programming Guide</h2>
                  <p className="text-slate-400 mt-2">Core snippets to get you started with common components.</p>
               </div>
               <CodeExamples />
            </div>

            <div id="projects" className="scroll-mt-24">
               <div className="flex flex-col mb-12">
                  <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Build Practical</span>
                  <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Example Projects</h2>
                  <p className="text-slate-400 mt-2">Get inspired with these beginner-friendly projects.</p>
               </div>
              <Projects />
            </div>

            <div id="troubleshooting" className="scroll-mt-24">
              <FAQ />
            </div>

            <div id="downloads" className="scroll-mt-24 pb-24">
                <div className="flex flex-col mb-12">
                  <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Resources</span>
                  <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Downloads</h2>
                  <p className="text-slate-400 mt-2">Get the latest drivers, datasheets, and software.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between group hover:bg-slate-800 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                         </div>
                         <div>
                            <p className="font-bold text-white">Arduino IDE 2.3.2</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Windows, macOS, Linux</p>
                         </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-400">Download</span>
                   </div>
                   <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between group hover:bg-slate-800 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                         </div>
                         <div>
                            <p className="font-bold text-white">ATmega328P Datasheet</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">PDF (12.4 MB)</p>
                         </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-400">View PDF</span>
                   </div>
                </div>
            </div>

          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
