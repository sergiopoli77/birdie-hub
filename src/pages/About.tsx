import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import courtBackground from "@/assets/court-background.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
          About <span className="text-primary">Badminton</span>
        </h1>

        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
          <img 
            src={courtBackground} 
            alt="Badminton court" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">What is Badminton?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. 
                Although it may be played with larger teams, the most common forms of the game are 
                "singles" (with one player per side) and "doubles" (with two players per side). 
                Badminton is often played as a casual outdoor activity in a yard or on a beach; 
                formal games are played on a rectangular indoor court.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">History</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The game has ancient origins, but it was in England during the 1860s that badminton 
                as we know it today developed from a game called battledore and shuttlecock. The sport 
                quickly gained popularity and was officially established with the formation of the 
                Badminton Association of England in 1893. Today, badminton is a popular sport worldwide, 
                especially in Asian countries, and has been an Olympic sport since 1992.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">Game Rules</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Scoring System</h3>
                  <p>A match consists of the best of three games of 21 points. Every time there is a serve, 
                  there is a point scored. The side winning a rally adds a point to its score.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Serving</h3>
                  <p>At the start of the rally, the server and receiver stand in diagonally opposite service 
                  courts. A legal serve must be hit diagonally over the net to the opponent's service court.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Court Dimensions</h3>
                  <p>The court is rectangular, 13.4 meters long and 6.1 meters wide for doubles matches, 
                  and 5.18 meters wide for singles matches. The net is placed at 1.55 meters height at the 
                  posts and 1.524 meters in the center.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">Health Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                <li>Improves cardiovascular health and stamina</li>
                <li>Increases muscle strength and flexibility</li>
                <li>Enhances reflexes and hand-eye coordination</li>
                <li>Promotes mental agility and concentration</li>
                <li>Helps maintain a healthy weight</li>
                <li>Reduces stress and improves mood</li>
                <li>Social interaction and team building</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
