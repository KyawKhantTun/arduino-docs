import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const PINS = [
  // Digital Pins (Top)
  { id: "d13", label: "13", type: "digital", x: 75, y: 15, description: "Digital I/O + Built-in LED" },
  { id: "d12", label: "12", type: "digital", x: 82, y: 15, description: "Digital I/O" },
  { id: "d11", label: "11", type: "pwm", x: 89, y: 15, description: "Digital I/O + PWM" },
  { id: "d10", label: "10", type: "pwm", x: 96, y: 15, description: "Digital I/O + PWM" },
  { id: "d9", label: "9", type: "pwm", x: 103, y: 15, description: "Digital I/O + PWM" },
  { id: "d8", label: "8", type: "digital", x: 110, y: 15, description: "Digital I/O" },
  
  // Analog Pins (Bottom Left)
  { id: "a0", label: "A0", type: "analog", x: 185, y: 85, description: "Analog Input 0" },
  { id: "a1", label: "A1", type: "analog", x: 192, y: 85, description: "Analog Input 1" },
  { id: "a2", label: "A2", type: "analog", x: 199, y: 85, description: "Analog Input 2" },
  { id: "a3", label: "A3", type: "analog", x: 206, y: 85, description: "Analog Input 3" },
  { id: "a4", label: "A4", type: "analog", x: 213, y: 85, description: "Analog Input 4 (SDA)" },
  { id: "a5", label: "A5", type: "analog", x: 220, y: 85, description: "Analog Input 5 (SCL)" },
  
  // Power Pins (Bottom Middle)
  { id: "vin", label: "VIN", type: "power", x: 140, y: 85, description: "Input Voltage" },
  { id: "gnd1", label: "GND", type: "power", x: 147, y: 85, description: "Ground" },
  { id: "gnd2", label: "GND", type: "power", x: 154, y: 85, description: "Ground" },
  { id: "5v", label: "5V", type: "power", x: 161, y: 85, description: "5V Output" },
  { id: "3.3v", label: "3.3V", type: "power", x: 168, y: 85, description: "3.3V Output" },
  { id: "reset", label: "RST", type: "power", x: 175, y: 85, description: "Reset Pin" },
];

export function BoardDiagram() {
  const [hoveredPin, setHoveredPin] = useState<typeof PINS[0] | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1 w-full max-w-[600px] relative">
        <svg viewBox="0 0 320 240" className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Main Board Body */}
          <rect x="20" y="20" width="280" height="200" rx="12" fill="#00979C" stroke="#00afb9" strokeWidth="1" />
          
          {/* Decorative Components */}
          <rect x="40" y="40" width="60" height="80" rx="4" fill="#0d1117" /> {/* USB Port */}
          <rect x="40" y="140" width="40" height="50" rx="2" fill="#1a1a1a" /> {/* DC Jack */}
          <rect x="150" y="80" width="80" height="80" rx="4" fill="#1a1a1a" /> {/* ATmega Chip */}
          <circle cx="190" cy="120" r="15" fill="#333" /> {/* Chip Circle */}
          
          <rect x="70" y="10" width="160" height="15" rx="2" fill="#0d1117" /> {/* Digital Header */}
          <rect x="135" y="85" width="95" height="15" rx="2" fill="#0d1117" /> {/* Analog/Power Header */}

          {/* Pins */}
          {PINS.map((pin) => (
            <motion.circle
              key={pin.id}
              cx={pin.x}
              cy={pin.y}
              r={3}
              fill={hoveredPin?.id === pin.id ? "white" : "#4FAABB"}
              className="cursor-pointer"
              whileHover={{ r: 6 }}
              onMouseEnter={() => setHoveredPin(pin)}
              onMouseLeave={() => setHoveredPin(null)}
            />
          ))}
        </svg>
      </div>

      <div className="flex-1 w-full space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold uppercase tracking-tight">Pin Configuration</h3>
          <p className="text-muted-foreground">Hover over any pin to see its function and description.</p>
        </div>

        <div className="min-h-[200px] p-8 rounded-3xl bg-muted/30 border border-border/50 flex flex-col justify-center">
           <AnimatePresence mode="wait">
             {hoveredPin ? (
               <motion.div
                 key={hoveredPin.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-4"
               >
                 <div className="flex items-center gap-3">
                    <Badge variant="outline" className={cn(
                      "px-3 py-1 text-xs uppercase font-bold",
                      hoveredPin.type === "digital" && "border-blue-500 text-blue-500",
                      hoveredPin.type === "pwm" && "border-purple-500 text-purple-500",
                      hoveredPin.type === "analog" && "border-orange-500 text-orange-500",
                      hoveredPin.type === "power" && "border-[#00979C] text-[#00979C]"
                    )}>
                      {hoveredPin.type}
                    </Badge>
                    <span className="text-3xl font-bold">{hoveredPin.label}</span>
                 </div>
                 <p className="text-xl font-medium">{hoveredPin.description}</p>
                 <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className="h-full bg-[#00979C]"
                    />
                 </div>
               </motion.div>
             ) : (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground"
               >
                 <div className="h-12 w-12 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                 </div>
                 <p>Select a pin on the diagram to see details</p>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
