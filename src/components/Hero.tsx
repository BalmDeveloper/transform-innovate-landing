
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl float-animation"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Transform Your Digital Vision
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  Digital Empire
                </span>
                in 30 Days
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A comprehensive 4-week program that transforms innovators into digital entrepreneurs. 
                Learn, build, and launch your global business with expert guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group shadow-elegant hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-accent/50 transition-all duration-300 hover:scale-105 border-2">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4 Weeks</div>
                <div className="text-sm text-muted-foreground">Intensive Program</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Practical Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Live</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in lg:scale-110">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500 group">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600"
                alt="Digital business transformation workspace"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-elegant border border-border/20 float-animation">
              <div className="text-sm font-medium text-muted-foreground">Success Rate</div>
              <div className="text-2xl font-bold text-primary">95%</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-elegant border border-border/20" style={{animationDelay: "2s"}}>
              <div className="text-sm font-medium text-muted-foreground">Global Reach</div>
              <div className="text-2xl font-bold text-primary">50+ Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
