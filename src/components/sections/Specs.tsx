import { ARDUINO_SPECS } from "@/src/data/arduino";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Specs() {
  return (
    <section id="specifications" className="py-16">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col mb-12">
          <span className="text-teal-500 font-bold text-xs uppercase tracking-widest">Hardware Power</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Technical Specifications</h2>
          <p className="text-slate-400 mt-2">Everything you need to know about the hardware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARDUINO_SPECS.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="group border-none bg-slate-900/50 border border-slate-800 hover:bg-slate-800/80 transition-all duration-300 overflow-hidden relative rounded-xl">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="h-8 w-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
                   </div>
                </div>
                <CardHeader className="pb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">{spec.label}</span>
                  <CardTitle className="text-2xl font-bold text-white">{spec.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
