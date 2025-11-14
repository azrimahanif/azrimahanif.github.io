
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 texture-stone">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always interested in discussing data engineering challenges,
            collaboration opportunities, or sharing knowledge with the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-earth transition-all duration-300 border-organic shadow-natural bg-card texture-paper animate-fade-in">
            <CardContent className="p-6 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">Drop me a line</p>
              <Button
                variant="outline"
                className="w-full border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('mailto:azrimahanif@gmail.com', '_blank')}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-earth transition-all duration-300 border-organic shadow-natural bg-card texture-wood animate-fade-in">
            <CardContent className="p-6 text-center">
              <Linkedin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm mb-4">Let's connect professionally</p>
              <Button
                variant="outline"
                className="w-full border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.linkedin.com/in/azri-mahanif/', '_blank')}
              >
                Connect
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-earth transition-all duration-300 border-organic shadow-natural bg-card texture-stone animate-fade-in">
            <CardContent className="p-6 text-center">
              <Github className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm mb-4">Check out my code</p>
              <Button
                variant="outline"
                className="w-full border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/azrimahanif', '_blank')}
              >
                Follow
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="border-t border-foreground/20 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Azri Mahanif. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/20 hover:text-accent"
              onClick={() => window.open('https://github.com/azrimahanif', '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/20 hover:text-accent"
              onClick={() => window.open('https://www.linkedin.com/in/azri-mahanif/', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/20 hover:text-accent"
              onClick={() => window.open('mailto:azrimahanif@gmail.com', '_blank')}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
