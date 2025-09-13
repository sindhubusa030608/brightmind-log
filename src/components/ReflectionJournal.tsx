import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Sparkles, Save } from "lucide-react";

const prompts = [
  "What made you smile today?",
  "What are you grateful for right now?",
  "What's one thing you learned about yourself today?",
  "How did you show kindness to yourself or others?",
  "What would you tell a friend going through what you're experiencing?",
  "What's something you're looking forward to?",
];

const ReflectionJournal = () => {
  const [reflection, setReflection] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
  const [isSaved, setIsSaved] = useState(false);

  const handleNewPrompt = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(randomPrompt);
  };

  const handleSave = () => {
    if (reflection.trim()) {
      setIsSaved(true);
      // Here you would save to database via Supabase
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2">
            <BookOpen className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Daily Reflection</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Personal Journal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Express your thoughts freely. This space is yours to reflect, process, and grow.
          </p>
        </div>

        <Card className="bg-gradient-card shadow-gentle border-0">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl text-foreground mb-2">Today's Reflection</CardTitle>
                <CardDescription className="text-base">
                  Take your time. There's no right or wrong way to reflect.
                </CardDescription>
              </div>
              <Button
                onClick={handleNewPrompt}
                variant="mood"
                size="sm"
                className="ml-4"
              >
                <Sparkles className="w-4 h-4" />
                New Prompt
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Reflection Prompt */}
            <div className="p-4 bg-secondary/50 rounded-xl border border-secondary">
              <p className="text-sm text-muted-foreground mb-1">Reflection Prompt:</p>
              <p className="text-lg font-medium text-foreground italic">"{currentPrompt}"</p>
            </div>

            {/* Text Area */}
            <div className="space-y-2">
              <Textarea
                placeholder="Start writing your thoughts here... Let your mind wander and express whatever comes to you naturally."
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="min-h-[200px] text-base leading-relaxed border-muted focus:border-primary resize-none"
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Your reflection is private and secure</span>
                <span>{reflection.length} characters</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              <Button 
                onClick={handleSave}
                variant="wellness" 
                size="lg"
                disabled={!reflection.trim() || isSaved}
                className="group"
              >
                {isSaved ? (
                  <>Reflection Saved! <Sparkles className="w-4 h-4" /></>
                ) : (
                  <>Save Reflection <Save className="w-4 h-4 group-hover:scale-110 transition-transform" /></>
                )}
              </Button>
            </div>

            {/* Gentle Reminder */}
            <div className="text-center p-4 bg-accent/10 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <Sparkles className="inline w-4 h-4 mr-1" />
                Remember: This is your safe space. Be honest, be kind to yourself, and trust the process. 🌱
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReflectionJournal;