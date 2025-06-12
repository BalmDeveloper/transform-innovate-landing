
import { Award, Target, Users2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About Transformation Ventures
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a design studio passionate about empowering innovators and building 
                exceptional digital experiences. Our mission is to bridge the gap between 
                creative vision and technical excellence.
              </p>
              <p className="text-lg text-muted-foreground">
                With years of experience in both training and development, we understand 
                what it takes to bring ideas to life and help businesses thrive in the 
                digital age.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering innovators with digital skills and solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Our Team</h3>
                <p className="text-sm text-muted-foreground">
                  Expert designers and developers passionate about innovation
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Our Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Delivering excellence in every project and training program
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=300"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=300"
                alt="Development workspace"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
