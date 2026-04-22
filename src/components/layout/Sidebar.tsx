import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Cpu, 
  Grid3X3, 
  Code2, 
  Lightbulb, 
  AlertCircle, 
  Download 
} from "lucide-react";

const navItems = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "specifications", label: "Specifications", icon: Cpu },
  { id: "pinout", label: "Pin Configuration", icon: Grid3X3 },
  { id: "programming", label: "Programming Guide", icon: Code2 },
  { id: "projects", label: "Example Projects", icon: Lightbulb },
  { id: "troubleshooting", label: "Troubleshooting", icon: AlertCircle },
  { id: "downloads", label: "Downloads", icon: Download },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="hidden border-r border-slate-800 bg-[#0d161d] md:block w-64 lg:w-72 xl:w-80 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="space-y-4 py-8 px-4">
        <div className="px-3 py-2">
          <h2 className="mb-6 px-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            Core Reference
          </h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "group flex w-full items-center rounded-lg px-3 py-2 text-sm transition-all duration-200 ease-in-out",
                  activeSection === item.id
                    ? "bg-slate-800 text-teal-400"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "mr-3 h-5 w-5 transition-colors",
                  activeSection === item.id ? "text-teal-400" : "text-slate-400 group-hover:text-white"
                )} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
