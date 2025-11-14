
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    title: "LLM Chatbot for Training & Policy Information",
    description: "Developed and deployed an intelligent chatbot system providing personalized training recommendations and company policy information using Large Language Models.",
    achievements: [
      "Integrated OpenAI API with local LLM deployment for hybrid inference",
      "Implemented Qdrant vector database for semantic search capabilities",
      "Built workflow automation using n8n for seamless user interactions",
      "Delivered personalized recommendations based on user queries and context"
    ],
    technologies: ["OpenAI API", "LLM", "Qdrant", "n8n", "Python", "Vector Database"],
    type: "AI/ML Project",
    company: "AAFİYAT TECH SDN BHD",
    featured: true
  },
  {
    title: "AI Surveillance System with CCTV Integration",
    description: "Led development of an AI-powered surveillance system using CCTV feeds and YOLO object detection for monitoring staff activities and office environment.",
    achievements: [
      "Implemented real-time YOLO object detection on CCTV streams",
      "Built monitoring dashboard for security and operational insights",
      "Optimized detection algorithms for office environment scenarios",
      "Integrated with existing security infrastructure"
    ],
    technologies: ["YOLO", "Computer Vision", "Python", "CCTV Integration", "Real-time Processing"],
    type: "Computer Vision Project",
    company: "AAFİYAT TECH SDN BHD",
    featured: true
  },
  {
    title: "Scalable Data Ecosystem with Real-time Streaming",
    description: "Designed and implemented scalable data ecosystems supporting real-time data streaming and AI model data pipelines on Google Cloud Platform.",
    achievements: [
      "Built data warehouses on Google BigQuery for ML workflows",
      "Automated data pipelines using mage.ai for improved accuracy",
      "Implemented real-time data streaming architecture",
      "Established data governance frameworks for AI model training"
    ],
    technologies: ["Google BigQuery", "mage.ai", "Python", "Real-time Streaming", "Data Governance"],
    type: "Data Engineering Project",
    company: "AAFİYAT TECH SDN BHD",
    featured: true
  },
  {
    title: "Image Preprocessing & ML Pipeline for Manufacturing",
    description: "Developed comprehensive image preprocessing modules and ML workflows for manufacturing quality control and hardware reliability analysis.",
    achievements: [
      "Built Keras-based preprocessing modules with data augmentation",
      "Designed workflows for object detection and image classification",
      "Created Power BI dashboards for model performance monitoring",
      "Conducted root cause analysis improving hardware reliability"
    ],
    technologies: ["Keras", "Power BI", "Computer Vision", "Object Detection", "Data Analysis"],
    type: "ML Engineering Project",
    company: "Intel Microelectronic (M) SDN BHD",
    featured: false
  },
  {
    title: "AI-Enhanced Vision Inspection Software",
    description: "Integrated machine learning capabilities into vision inspection software for industrial applications with pattern matching and OCR functionality.",
    achievements: [
      "Developed vision inspection systems with .NET framework",
      "Implemented pattern matching, OCR, and QR code reading",
      "Provided technical support and onsite installation services",
      "Enhanced inspection accuracy through AI integration"
    ],
    technologies: [".NET", "Computer Vision", "OCR", "Pattern Matching", "QR Code"],
    type: "Software Engineering Project",
    company: "Enovision SDN BHD",
    featured: false
  },
  {
    title: "Autonomous Drone AI System",
    description: "Developed and optimized machine learning models for autonomous drone applications using TensorFlow and YOLO on Nvidia Jetson platform.",
    achievements: [
      "Optimized ML models using TensorFlow and YOLO for drone applications",
      "Configured Nvidia Jetson development kit for edge deployment",
      "Integrated DJI SDK for drone control and data collection",
      "Prepared datasets with Pandas for model training and validation"
    ],
    technologies: ["TensorFlow", "YOLO", "Nvidia Jetson", "DJI SDK", "Pandas"],
    type: "Research & Development",
    company: "Aerodyne Geekhub SDN BHD",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          {/* <div className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-6 texture-stone">
            🚀 Portfolio Showcase
          </div> */}
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world data engineering and AI/ML projects that deliver measurable business impact
            across different industries and use cases.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-earth transition-all duration-500 hover:-translate-y-1 border-organic shadow-natural bg-card texture-wood animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border border-primary/20">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-2xl text-card-foreground mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {project.company}
                    </CardDescription>
                  </div>
                </div>
                <p className="text-card-foreground text-lg leading-relaxed mb-6 opacity-90">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-4 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-card-foreground opacity-90">
                        <span className="text-primary mr-3 mt-1.5">●</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-4 text-lg">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="px-3 py-1 border-primary/30 hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center border-primary hover:bg-primary hover:text-primary-foreground">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center border-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-4 h-4 mr-2" />
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-earth transition-all duration-300 hover:-translate-y-1 border-organic shadow-natural bg-card texture-stone animate-fade-in">
                <CardHeader>
                  <Badge variant="secondary" className="mb-3 w-fit bg-secondary/20 text-secondary-foreground">
                    {project.type}
                  </Badge>
                  <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground font-medium mb-3">
                    {project.company}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-secondary/30 hover:bg-secondary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex items-center hover:bg-accent/20 hover:text-accent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
