
import { Code, Users, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with cutting-edge technologies that perform beautifully across all devices.",
      features: ["Responsive Design", "Performance Optimized", "SEO Ready", "Scalable Architecture"]
    },
    {
      icon: Users,
      title: "Innovation Training",
      description: "Comprehensive training programs that empower innovators with digital skills and strategic thinking.",
      features: ["Design Thinking", "Digital Strategy", "Technical Skills", "Mentorship"]
    },
    {
      icon: Lightbulb,
      title: "Digital Strategy",
      description: "Strategic consulting to help you navigate the digital landscape and identify growth opportunities.",
      features: ["Market Analysis", "Technology Roadmap", "Competitive Research", "Growth Planning"]
    },
    {
      icon: Rocket,
      title: "Product Launch",
      description: "End-to-end support from concept to market launch, ensuring your product reaches its full potential.",
      features: ["MVP Development", "User Testing", "Launch Strategy", "Post-Launch Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive solutions to help innovators and businesses 
            thrive in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
