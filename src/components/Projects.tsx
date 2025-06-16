import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Projector } from "lucide-react";

const projects = [
  {
    title: "Real-time Analytics Platform",
    description: "Built a scalable real-time analytics platform processing millions of events per second using Apache Kafka and Spark Streaming.",
    technologies: ["Python", "Apache Kafka", "Spark", "Redis", "Docker"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "ML Model Deployment Pipeline",
    description: "Automated ML model deployment pipeline with A/B testing, monitoring, and automatic rollback capabilities.",
    technologies: ["Python", "MLflow", "Kubernetes", "FastAPI", "Prometheus"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Data Lake Architecture",
    description: "Designed and implemented a data lake architecture on AWS handling petabytes of structured and unstructured data.",
    technologies: ["AWS", "Spark", "Airflow", "Terraform", "Python"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "Automated Data Quality Framework",
    description: "Built a comprehensive data quality framework with automated testing, profiling, and alerting capabilities.",
    technologies: ["Python", "Great Expectations", "Apache Beam", "BigQuery"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "Customer Segmentation Engine",
    description: "Developed an ML-powered customer segmentation engine that improved marketing campaign effectiveness by 40%.",
    technologies: ["Python", "Scikit-learn", "PostgreSQL", "Flask", "Docker"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "IoT Data Processing System",
    description: "Built a real-time IoT data processing system handling sensor data from 10,000+ devices with sub-second latency.",
    technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "MQTT"],
    github: "#",
    demo: "#",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of data engineering and machine learning projects that solve real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Projector className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
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
