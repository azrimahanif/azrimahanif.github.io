
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    date: "March 15, 2024",
    description: "A comprehensive guide to designing and implementing data pipelines that can handle petabyte-scale data processing with Apache Spark and modern cloud infrastructure.",
    tags: ["Data Engineering", "Apache Spark", "Cloud"],
    readTime: "8 min read"
  },
  {
    title: "MLOps Best Practices: From Development to Production",
    date: "February 28, 2024",
    description: "Learn how to build robust MLOps pipelines that ensure reliable model deployment, monitoring, and maintenance in production environments.",
    tags: ["MLOps", "Machine Learning", "DevOps"],
    readTime: "12 min read"
  },
  {
    title: "Data Quality: The Foundation of Reliable Analytics",
    date: "February 10, 2024",
    description: "Explore strategies and tools for implementing comprehensive data quality frameworks that ensure your analytics and ML models are built on reliable data.",
    tags: ["Data Quality", "Analytics", "Best Practices"],
    readTime: "6 min read"
  },
  {
    title: "Real-time Stream Processing with Kafka and Flink",
    date: "January 22, 2024",
    description: "Deep dive into building low-latency stream processing applications using Apache Kafka and Apache Flink for real-time analytics and decision making.",
    tags: ["Stream Processing", "Kafka", "Flink"],
    readTime: "10 min read"
  },
  {
    title: "Career Transition: From Software Engineer to Data Engineer",
    date: "January 8, 2024",
    description: "My personal journey transitioning from traditional software development to data engineering, including the skills needed and common challenges faced.",
    tags: ["Career", "Data Engineering", "Personal"],
    readTime: "5 min read"
  },
  {
    title: "Infrastructure as Code for Data Teams",
    date: "December 20, 2023",
    description: "How to leverage Infrastructure as Code principles to build reproducible, scalable, and maintainable data infrastructure using Terraform and cloud services.",
    tags: ["Infrastructure", "Terraform", "DevOps"],
    readTime: "9 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sharing insights, experiences, and best practices in data engineering and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <span className="text-xs text-blue-600 font-medium">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl text-slate-800 line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-slate-600 line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
