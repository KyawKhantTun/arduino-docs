import { Search, Github, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-8">
        <div className="mr-8 flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-[#00979C] flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="hidden font-bold sm:inline-block text-xl tracking-tight">
            Arduino<span className="text-[#00979C]">Uno</span> Docs
          </span>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-full px-4 py-1 w-full md:w-96">
              <Search className="h-4 w-4 text-slate-500 mr-2" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="bg-transparent border-none text-sm focus-visible:ring-0 w-full text-slate-300 p-0 h-auto"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
             <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 text-slate-400"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <a href="https://github.com/arduino" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 text-slate-400">
                  <Github className="h-5 w-5 hover:text-white transition-colors" />
              </Button>
            </a>
            <Button className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-5 rounded-lg transition-all shadow-[0_0_15px_rgba(0,151,157,0.3)] h-9">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
