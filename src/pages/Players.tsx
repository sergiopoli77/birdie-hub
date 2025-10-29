import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal } from "lucide-react";

const Players = () => {
  const players = [
    { rank: 1, name: "Viktor Axelsen", country: "Denmark", points: 107625, titles: 12, badge: "gold" },
    { rank: 2, name: "Kento Momota", country: "Japan", points: 98340, titles: 10, badge: "silver" },
    { rank: 3, name: "Chen Long", country: "China", points: 87560, titles: 15, badge: "bronze" },
    { rank: 4, name: "Anders Antonsen", country: "Denmark", points: 75320, titles: 8, badge: null },
    { rank: 5, name: "Lee Zii Jia", country: "Malaysia", points: 72180, titles: 6, badge: null },
    { rank: 6, name: "Chou Tien Chen", country: "Taiwan", points: 68940, titles: 7, badge: null },
    { rank: 7, name: "Jonatan Christie", country: "Indonesia", points: 64750, titles: 5, badge: null },
    { rank: 8, name: "Anthony Ginting", country: "Indonesia", points: 61280, titles: 9, badge: null },
  ];

  const topPlayers = [
    { name: "Viktor Axelsen", country: "Denmark", achievement: "Olympic Gold Medalist 2020", specialty: "Men's Singles" },
    { name: "An Se-young", country: "South Korea", achievement: "World Champion 2023", specialty: "Women's Singles" },
    { name: "Marcus Gideon", country: "Indonesia", achievement: "World Champion Doubles", specialty: "Men's Doubles" },
  ];

  const getBadgeVariant = (badge: string | null) => {
    switch(badge) {
      case "gold": return "default";
      case "silver": return "secondary";
      case "bronze": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-center">
          Top <span className="text-primary">Players</span>
        </h1>
        <p className="text-center text-muted-foreground text-xl mb-12">
          Meet the world's best badminton athletes
        </p>

        {/* Featured Players */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topPlayers.map((player, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="w-8 h-8 text-primary" />
                  <Badge variant={index === 0 ? "default" : "secondary"}>Featured</Badge>
                </div>
                <CardTitle className="text-foreground text-2xl">{player.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Country:</span> {player.country}</p>
                  <p><span className="font-semibold text-foreground">Achievement:</span> {player.achievement}</p>
                  <p><span className="font-semibold text-foreground">Specialty:</span> {player.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rankings Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground flex items-center gap-2">
              <Medal className="text-primary" />
              World Rankings - Men's Singles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="font-bold text-foreground">Rank</TableHead>
                    <TableHead className="font-bold text-foreground">Player Name</TableHead>
                    <TableHead className="font-bold text-foreground">Country</TableHead>
                    <TableHead className="font-bold text-foreground text-right">Points</TableHead>
                    <TableHead className="font-bold text-foreground text-right">Titles</TableHead>
                    <TableHead className="font-bold text-foreground">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {players.map((player) => (
                    <TableRow 
                      key={player.rank} 
                      className="border-border hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-bold text-foreground">
                        {player.rank}
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        {player.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {player.country}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {player.points.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {player.titles}
                      </TableCell>
                      <TableCell>
                        {player.badge && (
                          <Badge variant={getBadgeVariant(player.badge)} className="capitalize">
                            {player.badge}
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
          <p className="text-muted-foreground text-center">
            <span className="font-semibold text-foreground">Note:</span> Rankings are updated weekly based on tournament performances and points accumulated
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Players;
