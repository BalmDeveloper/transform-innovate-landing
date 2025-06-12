
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/10 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Transformation Ventures
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering entrepreneurs to build and launch successful digital businesses 
              through our comprehensive 30-day transformation program.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@transformationventures.com"
                className="p-3 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Program</h4>
            <ul className="space-y-3">
              <li>
                <a href="#course" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  30-Day Course
                </a>
              </li>
              <li>
                <a href="#course" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#course" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Community Access
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#course" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Transformation Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
