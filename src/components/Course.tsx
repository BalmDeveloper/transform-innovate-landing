
import { Clock, Users, BookOpen, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Course = () => {
  return (
    <section id="course" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Build a Digital Business in 30 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
            A 4-Week Practical Course + Mentorship Program, on how your website was built and practical guide to platform updates and maintainance.
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mt-8 mb-6">
            Turn Your Idea Into a Global Digital Business—in Just 4 Weeks
          </h3>
        </div>

        {/* Program Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-primary" />
                <h4 className="text-xl font-semibold">Fast-paced, hands-on program</h4>
              </div>
              <p className="text-muted-foreground">
                Transformation Ventures is a fast-paced, hands-on program designed to help you build, launch, and scale a real digital business in just one month.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-primary" />
                <h4 className="text-xl font-semibold">Tools & Frameworks</h4>
              </div>
              <p className="text-muted-foreground">
                Using a blend of AI tools, no-code tech, and global business frameworks, you'll go from idea to launch-ready—with a real product, real feedback, and real support.
              </p>
              <p className="text-sm text-muted-foreground italic">
                It's a build-first, launch-fast experience delivered in one focused hour per week.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Curriculum */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">What You'll Learn</h3>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Each week covers one core pillar of launching a global-ready business:
          </p>
          
          <div className="space-y-8">
            {[
              {
                week: "01",
                title: "The Art of Innovation & Startup Ideas",
                points: [
                  "Discover how top founders generate and validate startup ideas",
                  "Learn ideation techniques and startup thinking",
                  "Craft a business idea worth building"
                ]
              },
              {
                week: "02",
                title: "Start Smart – Global Incorporation & Strategy",
                points: [
                  "How to legally incorporate a global digital business",
                  "Set up banking, payments, and systems",
                  "Position your startup for global operations from Day 1"
                ]
              },
              {
                week: "03",
                title: "Build & Launch with AI (Hands-On)",
                points: [
                  "Use no-code and low-code tools to build your Web Applications",
                  "Leverage AI to accelerate development and content",
                  "Deploy your MVP and start testing with users"
                ]
              },
              {
                week: "04",
                title: "The Business of Innovation",
                points: [
                  "Learn the fundamentals of digital marketing and user acquisition",
                  "Explore partnership models and growth tactics",
                  "Design your business structure for long-term scale"
                ]
              }
            ].map((week, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {week.week}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-4">Week {week.week.replace('0', '')}: {week.title}</h4>
                      <ul className="space-y-2">
                        {week.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capstone Project */}
        <div className="mb-20">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <CardContent className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Capstone Project</h3>
              <p className="text-lg text-foreground">
                By the end of the program, you'll launch a live MVP and get users to signup for your product or services.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Program Benefits */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">What's Included</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "1-hour live classes each week",
                description: "Expert-led instruction, walkthroughs, and Q&A."
              },
              {
                icon: Users,
                title: "24/7 Private Chat Support",
                description: "Get real-time answers, feedback, and help anytime during the program through our dedicated community chat."
              },
              {
                icon: BookOpen,
                title: "Personalized Guidance & Mentorship",
                description: "Receive direct feedback on your progress, product, and strategy from the GlobalOS team."
              },
              {
                icon: Clock,
                title: "Post-Program Coaching (1 Month)",
                description: "Stay on track with weekly office hours and personalized mentorship after the course ends."
              },
              {
                icon: Users,
                title: "Lifetime Access to the Transformation Ventures Community",
                description: "Connect with digital builders and entrepreneurs worldwide."
              },
              {
                icon: BookOpen,
                title: "Free Digital Startup Library",
                description: "Access curated books, guides, and resources to sharpen your entrepreneurial toolkit."
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 bg-secondary/20">
            <CardContent className="text-center space-y-2">
              <h4 className="font-semibold text-primary">Exclusive Perks & Partner Discounts</h4>
              <p className="text-sm text-muted-foreground">
                Get special deals and credits for software, services, and platforms to help you build smarter and faster.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Course;
