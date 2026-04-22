import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#00979C]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Technical Guide</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white mt-1 leading-tight tracking-tight">
                Arduino Uno <span className="text-slate-500">Rev3</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              The gold standard for beginner electronics. Learn to master pins, code logic, and real-world circuit integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 pt-8"
            >
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center w-28 h-28 lg:w-32 lg:h-32">
                <span className="text-teal-400 font-mono text-2xl">14</span>
                <span className="text-[10px] text-slate-500 uppercase mt-1 text-center">Digital Pins</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center w-28 h-28 lg:w-32 lg:h-32">
                <span className="text-teal-400 font-mono text-2xl">6</span>
                <span className="text-[10px] text-slate-500 uppercase mt-1 text-center">PWM Outputs</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center w-28 h-28 lg:w-32 lg:h-32">
                <span className="text-teal-400 font-mono text-2xl">32KB</span>
                <span className="text-[10px] text-slate-500 uppercase mt-1 text-center">Flash Mem</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto filter drop-shadow-[0_20px_50px_rgba(0,151,156,0.3)]">
               {/* Simplified Board Placeholder Visualization */}
               <div className="aspect-[4/3] rounded-3xl bg-[#00979C] p-8 overflow-hidden relative border-4 border-[#008184]/50 shadow-inner">
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-2xl rotate-45" />
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(14)].map((_, i) => (
                      <div key={i} className="w-2 h-4 bg-black/40 rounded-sm" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-4 bg-orange-400/40 rounded-sm" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://www.arduino.cc/en/uploads/Main/ArduinoUno_R2_Front.jpg" 
                      alt="Arduino Uno" 
                      className="w-[85%] rounded-lg shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                  </div>
               </div>
               {/* Floating elements */}
               <div className="absolute -top-4 -left-4 p-4 bg-card border rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                  <Code2 className="h-6 w-6 text-[#00979C]" />
               </div>
               <div className="absolute -bottom-4 -right-4 p-4 bg-card border rounded-2xl shadow-xl animate-pulse">
                  <Cpu className="h-6 w-6 text-blue-500" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Code2, Cpu } from "lucide-react";
