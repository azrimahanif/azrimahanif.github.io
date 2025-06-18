
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Tech Solutions Inc",
    role: "Senior Data Engineer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Led the design and implementation of scalable data pipelines processing 10TB+ daily data",
    achievements: [
      "Reduced data processing time by 60% through pipeline optimization",
      "Implemented real-time analytics platform serving 1M+ users",
      "Mentored junior engineers and established best practices"
    ],
    technologies: ["Python", "Apache Spark", "AWS", "Kubernetes", "Docker"]
  },
  {
    company: "DataCorp Analytics",
    role: "Data Engineer",
    duration: "2020 - 2022",
    location: "San Francisco, CA",
    description: "Built and maintained ETL pipelines for enterprise data warehouse solutions",
    achievements: [
      "Designed automated data quality monitoring system",
      "Migrated legacy systems to cloud infrastructure",
      "Collaborated with data scientists to deploy ML models"
    ],
    technologies: ["SQL", "Python", "Airflow", "GCP", "BigQuery", "dbt"]
  },
  {
    company: "StartupX",
    role: "Junior Data Analyst",
    duration: "2019 - 2020",
    location: "New York, NY",
    description: "Analyzed user behavior data to drive product decisions and growth strategies",
    achievements: [
      "Created automated reporting dashboards",
      "Identified key growth opportunities through data analysis",
      "Improved data accuracy by implementing validation rules"
    ],
    technologies: ["Python", "SQL", "Tableau", "PostgreSQL", "Pandas"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            💼 Professional Journey
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building data-driven solutions across different industries and scales, 
            with a focus on scalability, performance, and business impact.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-slate-900 mb-2">{exp.role}</CardTitle>
                    <CardDescription className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 mt-4 md:mt-0 md:text-right">
                    <div className="font-semibold text-slate-700">{exp.duration}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="text-slate-700 mt-6 text-lg leading-relaxed">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-4 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-700">
                        <span className="text-blue-600 mr-3 mt-1.5">●</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4 text-lg">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
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
