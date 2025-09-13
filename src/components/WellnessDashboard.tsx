import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, BookOpen, Target, Lightbulb, Calendar } from "lucide-react";

const WellnessDashboard = () => {
  // Mock data - in real app, this would come from Supabase
  const recentMoods = [
    { date: "Today", mood: "Good", emoji: "🙂", color: "mood-good" },
    { date: "Yesterday", mood: "Great", emoji: "😊", color: "mood-great" },
    { date: "2 days ago", mood: "Okay", emoji: "😐", color: "mood-okay" },
    { date: "3 days ago", mood: "Good", emoji: "🙂", color: "mood-good" },
    { date: "4 days ago", mood: "Great", emoji: "😊", color: "mood-great" },
  ];

  const wellnessTips = [
    {
      title: "Take a mindful break",
      description: "Try a 5-minute breathing exercise to center yourself",
      icon: Heart,
      category: "Mindfulness"
    },
    {
      title: "Practice gratitude",
      description: "Write down 3 things you're grateful for today",
      icon: Lightbulb,
      category: "Gratitude"
    },
    {
      title: "Connect with nature",
      description: "Spend 10 minutes outside or near a window with natural light",
      icon: Target,
      category: "Environment"
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Wellness Journey</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Dashboard & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your progress and discover personalized wellness suggestions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Trend */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-mood border-0 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Recent Mood Trend
                </CardTitle>
                <CardDescription>
                  Your emotional journey over the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMoods.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{entry.emoji}</div>
                        <div>
                          <p className="font-medium text-foreground">{entry.mood}</p>
                          <p className="text-sm text-muted-foreground">{entry.date}</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full bg-${entry.color}`}></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-secondary/30 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">
                    <Heart className="inline w-4 h-4 mr-1 text-accent" />
                    Insight
                  </p>
                  <p className="text-foreground">
                    You've been consistently positive this week! This shows great emotional awareness and self-care habits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="bg-gradient-wellness shadow-wellness border-0 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <div className="text-3xl font-bold mb-1">7</div>
                  <div className="text-sm opacity-90">Day Streak</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-mood shadow-mood border-0">
              <CardContent className="p-6">
                <div className="text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-3 text-foreground" />
                  <div className="text-3xl font-bold mb-1 text-foreground">12</div>
                  <div className="text-sm text-muted-foreground">Reflections Written</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gentle border border-muted">
              <CardContent className="p-6">
                <div className="text-center">
                  <Heart className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold mb-1 text-foreground">4.2</div>
                  <div className="text-sm text-muted-foreground">Average Mood</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Wellness Suggestions */}
        <div className="mt-16">
          <Card className="bg-gradient-card shadow-gentle border-0">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Lightbulb className="w-6 h-6 text-accent" />
                Personalized Wellness Suggestions
              </CardTitle>
              <CardDescription>
                Based on your recent mood patterns and reflections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {wellnessTips.map((tip, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <tip.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">
                        {tip.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{tip.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Try This
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WellnessDashboard;