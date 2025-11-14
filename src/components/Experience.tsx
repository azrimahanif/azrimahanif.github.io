
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Aafiyat Tech Sdn Bhd",
    role: "AI Data Engineer",
    duration: "May 2024 – Present",
    location: "Alor Setar, Kedah",
    description: "Designing and implementing scalable data ecosystems supporting real-time data streaming and AI model data pipelines",
    achievements: [
      "Designed and implemented scalable data ecosystems supporting real-time data streaming and AI model data pipelines",
      "Built and optimized data warehouses on Google BigQuery to support machine learning workflows",
      "Automated data pipelines using mage.ai to improve data accuracy and processing efficiency for AI applications",
      "Developed and deployed a Large Language Model (LLM) chatbot project enabling users to receive personalized training recommendations and company policy information",
      "Led AI surveillance project using CCTV feeds and YOLO object detection to monitor staff activities and office environment",
      "Established data governance frameworks ensuring data quality and compliance for AI model training datasets"
    ],
    technologies: ["Google BigQuery", "mage.ai", "n8n", "Qdrant", "OpenAI API", "YOLO", "LLM", "TensorFlow"]
  },
  {
    company: "Intel Microelectronic (M) Sdn Bhd",
    role: "Product Development Engineer",
    duration: "Oct 2020 – May 2024",
    location: "Bayan Lepas, Pulau Pinang",
    description: "Developed image preprocessing modules and automated data visualization dashboards for AI system performance monitoring",
    achievements: [
      "Developed image preprocessing modules using Keras for data augmentation including rotation, shifting, shearing, zooming, and normalization",
      "Designed workflows for dataset preparation supporting object detection and image classification model development",
      "Automated data visualization dashboards with Power BI to monitor model performance and operational metrics",
      "Conducted root cause analysis on production data to improve hardware reliability impacting AI system performance"
    ],
    technologies: ["Keras", "Power BI", "Computer Vision", "Object Detection", "Image Classification", "Data Visualization"]
  },
  {
    company: "Enovision Sdn Bhd",
    role: "Software Engineer",
    duration: "Oct 2019 – Sept 2020",
    location: "Petaling Jaya, Selangor",
    description: "Led AI research and development to integrate machine learning capabilities into vision inspection software",
    achievements: [
      "Led AI research and development to integrate machine learning capabilities into vision inspection software",
      "Developed vision inspection systems with pattern matching, OCR, and QR code reading using .NET",
      "Provided technical support and onsite installation for AI-enabled vision systems"
    ],
    technologies: [".NET", "Computer Vision", "OCR", "Pattern Matching", "QR Code", "Machine Learning"]
  },
  {
    company: "Aerodyne Geekhub Sdn Bhd",
    role: "Machine Learning Intern",
    duration: "June 2018 – Sept 2018",
    location: "Petaling Jaya, Selangor",
    description: "Assisted in developing and optimizing machine learning models for autonomous drone AI applications",
    achievements: [
      "Assisted in developing and optimizing machine learning models using TensorFlow and YOLO",
      "Prepared and pre-processed datasets with Pandas for model training and validation",
      "Configured Nvidia Jetson development kit for autonomous drone AI applications",
      "Integrated DJI SDK for drone-related machine learning project"
    ],
    technologies: ["TensorFlow", "YOLO", "Pandas", "Nvidia Jetson", "DJI SDK", "Autonomous Systems"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          {/* <div className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-6 texture-stone">
            💼 Professional Journey
          </div> */}
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building data-driven solutions and AI/ML systems across different industries,
            with expertise in computer vision, data engineering, and machine learning applications.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-earth transition-all duration-500 hover:-translate-y-1 border-organic shadow-natural bg-card texture-wood animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-card-foreground mb-2">{exp.role}</CardTitle>
                    <CardDescription className="text-xl font-semibold text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4 md:mt-0 md:text-right">
                    <div className="font-semibold text-foreground">{exp.duration}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="text-card-foreground mt-6 text-lg leading-relaxed opacity-90">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-4 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-card-foreground opacity-90">
                        <span className="text-primary mr-3 mt-1.5">●</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4 text-lg">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-all duration-300 texture-paper"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
