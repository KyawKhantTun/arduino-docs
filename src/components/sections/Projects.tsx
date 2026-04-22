import { ARDUINO_PROJECTS } from "@/src/data/arduino";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-8">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ARDUINO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="group bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 items-center hover:bg-slate-800 transition-colors shadow-sm cursor-pointer">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center shrink-0",
                  project.difficulty === "Beginner" && "bg-green-500/10 text-green-400",
                  project.difficulty === "Intermediate" && "bg-blue-500/10 text-blue-400",
                  project.difficulty === "Advanced" && "bg-purple-500/10 text-purple-400"
                )}>
                  {project.difficulty === "Beginner" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>}
                  {project.difficulty === "Intermediate" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                  {project.difficulty === "Advanced" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-white truncate">{project.title}</div>
                  <div className="text-xs text-slate-500 truncate">{project.description}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-700 group-hover:text-teal-400 transition-colors shrink-0" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
