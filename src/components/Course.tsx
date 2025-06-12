
import { CheckCircle, Clock, Users, Zap, Lightbulb, Globe, Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Course = () => {
  const weeks = [
    {
      number: "01",
      title: "The Art of Innovation & Startup Ideas",
      description: "Discover how top founders generate and validate startup ideas",
      icon: Lightbulb,
      highlights: [
        "Ideation techniques and startup thinking",
        "Market validation frameworks",
        "Craft a business idea worth building"
      ]
    },
    {
      number: "02", 
      title: "Start Smart – Global Incorporation & Strategy",
      description: "How to legally incorporate a global digital business",
      icon: Globe,
      highlights: [
        "Legal incorporation processes",
        "Banking, payments, and systems setup",
        "Position for global operations from Day 1"
      ]
    },
    {
      number: "03",
      title: "Build & Launch with AI (Hands-On)",
      description: "Use no-code and low-code tools to build your Web Applications",
      icon: Rocket,
      highlights: [
        "No-code and low-code development",
        "AI-accelerated development and content",
        "Deploy your MVP and start user testing"
      ]
    },
    {
      number: "04",
      title: "The Business of Innovation",
      description: "Learn the fundamentals of digital marketing and user acquisition",
      icon: TrendingUp,
      highlights: [
        "Digital marketing and user acquisition",
        "Partnership models and growth tactics",
        "Business structure for long-term scale"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "1-Hour Live Classes",
      description: "Weekly expert-led instruction, walkthroughs, and Q&A sessions"
    },
    {
      icon: Users,
      title: "24/7 Private Chat Support",
      description: "Real-time answers, feedback, and help through dedicated community"
    },
    {
      icon: Zap,
      title: "Personalized Mentorship",
      description: "Direct feedback on your progress, product, and strategy"
    },
    {
      icon: CheckCircle,
      title: "Post-Program Coaching",
      description: "Weekly office hours and mentorship for one month after completion"
    }
  ];

  return (
    <section id="course" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            30-Day Transformation
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Turn Your Idea Into a 
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Global Digital Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Fast-paced, hands-on program using AI tools, no-code tech, and global business frameworks. 
            Go from idea to launch-ready with real products, feedback, and support.
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="lg:col-span-2 border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">What You'll Learn</CardTitle>
              <CardDescription>
                Each week covers one core pillar of launching a global-ready business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {weeks.map((week, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {week.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <week.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{week.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">{week.description}</p>
                    <ul className="space-y-1">
                      {week.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/20 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Capstone Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-4">
                  Launch a live MVP and get users to sign up for your product or services.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Rocket className="w-4 h-4 text-primary" />
                  Real business launch
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Program Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground text-sm">{benefit.title}</div>
                      <div className="text-xs text-muted-foreground">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Lifetime Community Access",
              description: "Connect with digital builders and entrepreneurs worldwide",
              icon: Users
            },
            {
              title: "Free Digital Startup Library", 
              description: "Curated books, guides, and resources for entrepreneurs",
              icon: Lightbulb
            },
            {
              title: "Exclusive Partner Perks",
              description: "Special deals and credits for software and services",
              icon: Zap
            }
          ].map((item, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="shadow-elegant hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:scale-105 px-8 py-6 text-lg">
            Join the Program
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Course;
