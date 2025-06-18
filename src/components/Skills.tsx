
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Data Engineering",
    skills: ["ETL", "Data Modeling", "Database Management", "Pandas", "SQL", "Apache Spark", "BigQuery", "Cloud Storage", "Dataflow", "Airflow", "mage.ai"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", ".NET", "Node.js", "C#", "React", "JavaScript", "Bash Scripting"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "Keras", "YOLO", "Scikit-learn", "PyTorch", "MLflow", "OpenAI API", "LLM"]
  },
  {
    title: "Cloud Platforms",
    skills: ["Google Cloud Platform", "BigQuery", "Cloud Storage", "Dataflow", "AWS S3", "AWS Glue", "Azure Data Factory", "Azure Synapse"]
  },
  {
    title: "Image Processing & Computer Vision",
    skills: ["Object Detection", "Image Preprocessing", "OpenCV", "Pattern Matching", "OCR", "QR Code Reading"]
  },
  {
    title: "Data Visualization & Analysis",
    skills: ["Power BI", "Tableau", "PowerApps", "Data Analysis", "Dashboard Automation"]
  },
  {
    title: "DevOps & Automation",
    skills: ["Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Power Automate", "n8n", "CI/CD"]
  },
  {
    title: "APIs & Data Formats",
    skills: ["RESTful APIs", "GraphQL", "JSON", "Parquet", "DJI SDK"]
  },
  {
    title: "Specialized Technologies",
    skills: ["Qdrant Vector Database", "Nvidia Jetson", "CCTV Integration", "Data Governance", "Lean Six Sigma"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            🛠️ Technical Expertise
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in data engineering, AI/ML, and modern cloud technologies 
            for building scalable data solutions and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Professional Data Science</CardTitle>
                <CardDescription className="text-green-700 font-medium">USM Computer Science School (Ktechno Sdn.Bhd) • 2022</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Lean Six Sigma Yellow Belt</CardTitle>
                <CardDescription className="text-orange-700 font-medium">OTC Sdn Bhd • 2022</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
