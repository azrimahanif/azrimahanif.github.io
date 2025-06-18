
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 animate-fade-in leading-tight">
            Data Engineer &<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ML Specialist
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Transforming complex data into actionable insights with modern engineering practices. 
            Passionate about building scalable data pipelines and machine learning solutions that drive business impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16 animate-fade-in">
          <Button variant="ghost" size="lg" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="lg" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="lg" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        <button 
          onClick={scrollToExperience}
          className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-300 group"
        >
          <ArrowDown className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
