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
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 animate-fade-in leading-tight">
            AI Data Engineer
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Transforming complex data into actionable insights with modern engineering practices.
            Passionate about building scalable data pipelines and machine learning solutions that drive business impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <a
            href="/Muhammad_Azri_Mahanif.pdf"
            download
            className="border-2 border-slate-300 hover:border-cyan-400 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center rounded"
            style={{ minHeight: '56px' }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-16 animate-fade-in">
          <Button 
            variant="ghost" 
            size="lg" 
            className="hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
            onClick={() => window.open('https://github.com/azrimahanif', '_blank')}
          >
            <Github className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/azri-mahanif/', '_blank')}
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
            onClick={() => window.open('mailto:azrimahanif@gmail.com', '_blank')}
          >
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        <button 
          onClick={scrollToExperience}
          className="animate-bounce text-slate-400 hover:text-cyan-600 transition-colors duration-300 group"
        >
          <ArrowDown className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
