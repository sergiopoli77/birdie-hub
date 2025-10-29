import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Schedule = () => {
  const upcomingMatches = [
    {
      date: "2025-11-05",
      time: "14:00",
      tournament: "Indonesia Open 2025",
      location: "Jakarta, Indonesia",
      category: "Super 1000",
      status: "upcoming",
      matchup: "Men's Singles Final"
    },
    {
      date: "2025-11-08",
      time: "16:30",
      tournament: "Malaysia Masters",
      location: "Kuala Lumpur, Malaysia",
      category: "Super 500",
      status: "upcoming",
      matchup: "Women's Singles Semifinal"
    },
    {
      date: "2025-11-12",
      time: "13:00",
      tournament: "Japan Open",
      location: "Tokyo, Japan",
      category: "Super 750",
      status: "upcoming",
      matchup: "Mixed Doubles Quarterfinal"
    },
    {
      date: "2025-11-15",
      time: "15:00",
      tournament: "China Open",
      location: "Shanghai, China",
      category: "Super 1000",
      status: "upcoming",
      matchup: "Men's Doubles Final"
    },
    {
      date: "2025-11-18",
      time: "17:00",
      tournament: "Denmark Open",
      location: "Copenhagen, Denmark",
      category: "Super 750",
      status: "upcoming",
      matchup: "Women's Doubles Semifinal"
    },
  ];

  const recentResults = [
    {
      date: "2025-10-28",
      tournament: "French Open",
      winner: "Viktor Axelsen",
      score: "21-15, 21-18",
      category: "Men's Singles"
    },
    {
      date: "2025-10-26",
      tournament: "French Open",
      winner: "Chen Yu Fei",
      score: "21-19, 18-21, 21-16",
      category: "Women's Singles"
    },
    {
      date: "2025-10-25",
      tournament: "French Open",
      winner: "Gideon/Sukamuljo",
      score: "21-17, 21-14",
      category: "Men's Doubles"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "upcoming": return <Badge className="bg-primary">Upcoming</Badge>;
      case "live": return <Badge className="bg-secondary">Live</Badge>;
      case "completed": return <Badge variant="outline">Completed</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-center">
          Tournament <span className="text-primary">Schedule</span>
        </h1>
        <p className="text-center text-muted-foreground text-xl mb-12">
          Stay updated with upcoming matches and tournaments
        </p>

        {/* Upcoming Matches */}
        <Card className="border-border mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground flex items-center gap-2">
              <Calendar className="text-primary" />
              Upcoming Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="font-bold text-foreground">Date</TableHead>
                    <TableHead className="font-bold text-foreground">Time</TableHead>
                    <TableHead className="font-bold text-foreground">Tournament</TableHead>
                    <TableHead className="font-bold text-foreground">Location</TableHead>
                    <TableHead className="font-bold text-foreground">Match</TableHead>
                    <TableHead className="font-bold text-foreground">Category</TableHead>
                    <TableHead className="font-bold text-foreground">Status</TableHead>
                    <TableHead className="font-bold text-foreground">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingMatches.map((match, index) => (
                    <TableRow key={index} className="border-border hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium text-foreground">
                        {new Date(match.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {match.time}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        {match.tournament}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {match.location}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {match.matchup}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{match.category}</Badge>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(match.status)}
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Results */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground">Recent Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {new Date(result.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric'
                          })}
                        </Badge>
                        <Badge className="bg-secondary text-xs">{result.category}</Badge>
                      </div>
                      <h3 className="font-bold text-foreground text-lg">{result.tournament}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary text-lg mb-1">Winner: {result.winner}</p>
                      <p className="text-muted-foreground">Score: {result.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-border">
          <p className="text-foreground text-center text-lg">
            Want to receive notifications about upcoming matches? 
            <Button variant="link" className="text-primary ml-2">
              Subscribe to our newsletter
            </Button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
