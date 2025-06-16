
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "Scala", "Java", "R", "JavaScript"]
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Apache Kafka", "Airflow", "dbt", "Apache Beam", "Flink"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "Snowflake", "Elasticsearch"]
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Kubeflow", "Apache Spark ML"]
  },
  {
    title: "Data Visualization",
    skills: ["Tableau", "Power BI", "Grafana", "D3.js", "Plotly", "Matplotlib"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for modern data engineering and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
