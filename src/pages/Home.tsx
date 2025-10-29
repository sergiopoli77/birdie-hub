import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-badminton.jpg";

const Home = () => {
  const features = [
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Tournaments",
      description: "Compete in exciting tournaments and championships throughout the year",
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Community",
      description: "Join a vibrant community of badminton enthusiasts and professionals",
    },
    {
      icon: <Calendar className="w-12 h-12 text-primary" />,
      title: "Regular Events",
      description: "Stay updated with weekly matches and training sessions",
    },
    {
      icon: <Target className="w-12 h-12 text-secondary" />,
      title: "Skill Development",
      description: "Improve your game with expert coaching and resources",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-10" />
        <img 
          src={heroImage} 
          alt="Badminton hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Welcome to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BadmintonPro</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the thrill of badminton with tournaments, training, and a passionate community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now
              </Button>
            </Link>
            <Link to="/schedule">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Why Choose <span className="text-primary">BadmintonPro</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players who have already discovered their passion for badminton
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Join Our Community
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
