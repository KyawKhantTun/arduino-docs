import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-14 border-t border-slate-800 flex items-center justify-between px-8 bg-slate-950 text-[11px] text-slate-500 font-medium mt-24">
      <div className="flex gap-6">
        <span>&copy; {new Date().getFullYear()} Arduino Documentation</span>
        <a href="https://github.com/arduino" className="hover:text-white transition-colors">GitHub Repository</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
      <div className="flex items-center gap-1">
        Made for Arduino Learners with <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-1" />
      </div>
    </footer>
  );
}
