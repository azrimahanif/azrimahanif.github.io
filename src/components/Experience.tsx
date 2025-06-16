
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
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building data-driven solutions across different industries and scales
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 mt-2 md:mt-0 md:text-right">
                    <div>{exp.duration}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <p className="text-slate-600 mt-4">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
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
