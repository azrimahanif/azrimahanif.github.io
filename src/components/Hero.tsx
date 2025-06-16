
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
            Data Engineer &<br />
            <span className="text-blue-600">ML Specialist</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Transforming data into insights with modern engineering practices. 
            Passionate about building scalable data pipelines and machine learning solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <button 
          onClick={scrollToExperience}
          className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
