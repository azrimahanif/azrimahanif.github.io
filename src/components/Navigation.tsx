
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-slate-800">Portfolio</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("experience")}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("blog")}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
          <Button variant="outline" size="sm" className="ml-4">
            <Download className="w-4 h-4 mr-2" />
            CV
          </Button>
        </div>

        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
