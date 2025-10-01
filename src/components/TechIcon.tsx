import React from 'react';
import {
  // Programming Languages & General
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaCog,
  FaCode,
  FaServer,
} from 'react-icons/fa';
import {
  // ML/AI
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiKeras,
  SiJupyter,

  // Cloud & DevOps
  SiKubernetes,
  SiGooglecloud,
  SiAmazonwebservices,
  SiGooglebigquery,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiNginx,

  // Data & Analytics
  SiApachespark,
  SiApachehadoop,
  SiTableau,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiKibana,
  SiLogstash,
  SiRedis,
  SiMongodb,
  SiPostgresql,

  // Web Development
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,

  // APIs & Messaging
  SiApachekafka,
  SiRabbitmq,

  // Monitoring & Logging
  SiNvidia,

} from 'react-icons/si';

interface TechIconProps {
  tech: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ tech, className = "w-5 h-5" }) => {
  const techLower = tech.toLowerCase();

  // Programming Languages
  if (techLower.includes('python')) return <FaPython className={className} title="Python" />;
  if (techLower.includes('javascript') || techLower.includes('js')) return <FaJs className={className} title="JavaScript" />;
  if (techLower.includes('typescript')) return <SiTypescript className={className} title="TypeScript" />;
  if (techLower.includes('java')) return <FaJava className={className} title="Java" />;
  if (techLower.includes('c#')) return <FaCode className={className} title="C#" />;
  if (techLower.includes('.net')) return <FaCode className={className} title=".NET" />;
  if (techLower.includes('node.js') || techLower.includes('nodejs')) return <FaNodeJs className={className} title="Node.js" />;
  if (techLower.includes('react')) return <FaReact className={className} title="React" />;
  if (techLower.includes('next.js')) return <SiNextdotjs className={className} title="Next.js" />;
  if (techLower.includes('vue')) return <SiVuedotjs className={className} title="Vue.js" />;
  if (techLower.includes('angular')) return <SiAngular className={className} title="Angular" />;

  // ML/AI Frameworks
  if (techLower.includes('tensorflow')) return <SiTensorflow className={className} title="TensorFlow" />;
  if (techLower.includes('pytorch')) return <SiPytorch className={className} title="PyTorch" />;
  if (techLower.includes('keras')) return <SiKeras className={className} title="Keras" />;
  if (techLower.includes('scikit-learn') || techLower.includes('sklearn')) return <FaCode className={className} title="Scikit-learn" />;
  if (techLower.includes('llm') || techLower.includes('openai')) return <FaCode className={className} title="LLM/OpenAI" />;
  if (techLower.includes('mlflow')) return <FaCode className={className} title="MLflow" />;
  if (techLower.includes('yolo')) return <SiOpencv className={className} title="YOLO" />;
  if (techLower.includes('opencv')) return <SiOpencv className={className} title="OpenCV" />;

  // Cloud Platforms
  if (techLower.includes('google cloud') || techLower.includes('gcp')) return <SiGooglecloud className={className} title="Google Cloud" />;
  if (techLower.includes('aws') || techLower.includes('amazon')) return <SiAmazonwebservices className={className} title="AWS" />;
  if (techLower.includes('azure')) return <FaCloud className={className} title="Azure" />;
  if (techLower.includes('bigquery')) return <SiGooglebigquery className={className} title="BigQuery" />;
  if (techLower.includes('cloud storage')) return <FaCloud className={className} title="Cloud Storage" />;

  // Databases
  if (techLower.includes('sql')) return <FaDatabase className={className} title="SQL" />;
  if (techLower.includes('mongodb')) return <SiMongodb className={className} title="MongoDB" />;
  if (techLower.includes('postgresql')) return <SiPostgresql className={className} title="PostgreSQL" />;
  if (techLower.includes('redis')) return <SiRedis className={className} title="Redis" />;
  if (techLower.includes('elasticsearch')) return <SiElasticsearch className={className} title="Elasticsearch" />;
  if (techLower.includes('qdrant')) return <FaDatabase className={className} title="Qdrant" />;

  // Big Data & Processing
  if (techLower.includes('spark')) return <SiApachespark className={className} title="Apache Spark" />;
  if (techLower.includes('hadoop')) return <SiApachehadoop className={className} title="Hadoop" />;
  if (techLower.includes('kafka')) return <SiApachekafka className={className} title="Kafka" />;
  if (techLower.includes('airflow')) return <FaCode className={className} title="Airflow" />;
  if (techLower.includes('mage.ai') || techLower.includes('mage')) return <FaCode className={className} title="mage.ai" />;
  if (techLower.includes('dataflow')) return <FaServer className={className} title="Dataflow" />;

  // DevOps & Containerization
  if (techLower.includes('docker')) return <FaDocker className={className} title="Docker" />;
  if (techLower.includes('kubernetes')) return <SiKubernetes className={className} title="Kubernetes" />;
  if (techLower.includes('k8s')) return <SiKubernetes className={className} title="Kubernetes" />;
  if (techLower.includes('git')) return <FaGitAlt className={className} title="Git" />;
  if (techLower.includes('jenkins')) return <SiJenkins className={className} title="Jenkins" />;
  if (techLower.includes('github actions')) return <SiGithubactions className={className} title="GitHub Actions" />;

  // Data Visualization & BI
  if (techLower.includes('power bi')) return <FaChartLine className={className} title="Power BI" />;
  if (techLower.includes('tableau')) return <SiTableau className={className} title="Tableau" />;
  if (techLower.includes('power apps')) return <FaCode className={className} title="Power Apps" />;
  if (techLower.includes('grafana')) return <SiGrafana className={className} title="Grafana" />;
  if (techLower.includes('power automate')) return <FaCog className={className} title="Power Automate" />;

  // APIs & Web
  if (techLower.includes('rest') || techLower.includes('api')) return <FaCode className={className} title="REST API" />;
  if (techLower.includes('graphql')) return <FaCode className={className} title="GraphQL" />;
  if (techLower.includes('json')) return <FaCode className={className} title="JSON" />;
  if (techLower.includes('parquet')) return <FaCode className={className} title="Parquet" />;
  if (techLower.includes('xml')) return <FaCode className={className} title="XML" />;

  // Image Processing & Computer Vision
  if (techLower.includes('object detection')) return <SiOpencv className={className} title="Object Detection" />;
  if (techLower.includes('image preprocessing')) return <SiOpencv className={className} title="Image Processing" />;
  if (techLower.includes('pattern matching')) return <SiOpencv className={className} title="Pattern Matching" />;
  if (techLower.includes('ocr')) return <SiOpencv className={className} title="OCR" />;
  if (techLower.includes('qr code')) return <FaCode className={className} title="QR Code" />;

  // Monitoring & Logging
  if (techLower.includes('prometheus')) return <SiPrometheus className={className} title="Prometheus" />;
  if (techLower.includes('kibana')) return <SiKibana className={className} title="Kibana" />;
  if (techLower.includes('logstash')) return <SiLogstash className={className} title="Logstash" />;

  // Configuration Management
  if (techLower.includes('terraform')) return <SiTerraform className={className} title="Terraform" />;
  if (techLower.includes('ansible')) return <SiAnsible className={className} title="Ansible" />;

  // Message Queues
  if (techLower.includes('rabbitmq')) return <SiRabbitmq className={className} title="RabbitMQ" />;

  // Web Servers
  if (techLower.includes('nginx')) return <SiNginx className={className} title="Nginx" />;

  // Workflow Automation
  if (techLower.includes('n8n')) return <FaCog className={className} title="n8n" />;

  // Computer Vision & AI Hardware
  if (techLower.includes('nvidia')) return <SiNvidia className={className} title="NVIDIA" />;
  if (techLower.includes('jetson')) return <SiNvidia className={className} title="NVIDIA Jetson" />;
  if (techLower.includes('cctv')) return <FaCode className={className} title="CCTV" />;

  // Data Quality & Governance
  if (techLower.includes('data governance')) return <FaChartLine className={className} title="Data Governance" />;
  if (techLower.includes('lean six sigma')) return <FaChartLine className={className} title="Lean Six Sigma" />;

  // Data Analysis
  if (techLower.includes('pandas')) return <FaCode className={className} title="Pandas" />;
  if (techLower.includes('jupyter')) return <SiJupyter className={className} title="Jupyter" />;
  if (techLower.includes('data analysis')) return <FaChartLine className={className} title="Data Analysis" />;
  if (techLower.includes('dashboard automation')) return <FaChartLine className={className} title="Dashboard Automation" />;

  // Databases & Storage
  if (techLower.includes('etl')) return <FaDatabase className={className} title="ETL" />;
  if (techLower.includes('data modeling')) return <FaDatabase className={className} title="Data Modeling" />;
  if (techLower.includes('database management')) return <FaDatabase className={className} title="Database Management" />;

  // Bash & Scripting
  if (techLower.includes('bash')) return <FaCode className={className} title="Bash" />;
  if (techLower.includes('scripting')) return <FaCode className={className} title="Scripting" />;

  // Mobile & SDK
  if (techLower.includes('dji sdk')) return <FaCode className={className} title="DJI SDK" />;

  // Vector Database
  if (techLower.includes('vector database')) return <FaDatabase className={className} title="Vector Database" />;

  // Default fallback
  return <FaCode className={className} title={tech} />;
};

export default TechIcon;