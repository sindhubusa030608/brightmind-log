import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Meh, Frown, Heart, Calendar } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Great", value: 5, color: "mood-great" },
  { emoji: "🙂", label: "Good", value: 4, color: "mood-good" },
  { emoji: "😐", label: "Okay", value: 3, color: "mood-okay" },
  { emoji: "😔", label: "Low", value: 2, color: "mood-low" },
  { emoji: "😞", label: "Difficult", value: 1, color: "mood-difficult" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const handleMoodSelect = (moodValue: number) => {
    setSelectedMood(moodValue);
  };

  const handleLogMood = () => {
    if (selectedMood) {
      setIsLogged(true);
      // Here you would typically save to database via Supabase
      setTimeout(() => setIsLogged(false), 3000);
    }
  };

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-card shadow-mood border-0">
          <CardHeader className="text-center pb-8">
            <div className="mb-4 inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2">
              <Calendar className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm font-medium">{today}</span>
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              How are you feeling today?
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Take a moment to check in with yourself
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Mood Selection */}
            <div className="grid grid-cols-5 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className={`
                    p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105
                    ${selectedMood === mood.value 
                      ? `border-primary bg-primary/10 shadow-mood transform scale-105` 
                      : `border-muted hover:border-primary/50 bg-card`
                    }
                  `}
                >
                  <div className="text-4xl mb-2">{mood.emoji}</div>
                  <div className="text-sm font-medium text-foreground">{mood.label}</div>
                </button>
              ))}
            </div>

            {/* Selected Mood Feedback */}
            {selectedMood && (
              <div className="text-center p-4 bg-secondary/30 rounded-xl">
                <p className="text-muted-foreground mb-4">
                  You're feeling {moods.find(m => m.value === selectedMood)?.label.toLowerCase()} today
                </p>
                <Button 
                  onClick={handleLogMood}
                  variant="hero" 
                  size="lg"
                  disabled={isLogged}
                  className="group"
                >
                  {isLogged ? (
                    <>Mood Logged! <Heart className="w-4 h-4 text-accent" /></>
                  ) : (
                    <>Log My Mood <Smile className="w-4 h-4 group-hover:scale-110 transition-transform" /></>
                  )}
                </Button>
              </div>
            )}

            {/* Encouragement */}
            <div className="text-center text-sm text-muted-foreground">
              <p>Every feeling is valid. You're taking a positive step by checking in with yourself. 💙</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MoodTracker;