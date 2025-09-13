import { Button } from "@/components/ui/button";
import { Heart, BookOpen, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <Heart className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Your Mental Wellness Companion</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            Mental Wellbeing
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Daily mood tracking, thoughtful reflection, and personalized wellness insights. 
          Make mental health a gentle habit, not a task.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="wellness" size="xl" className="group">
            Start Your Wellness Journey
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Heart className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Daily Mood Tracking</h3>
            <p className="text-sm text-white/80">Simple, intuitive mood logging that takes just seconds</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <BookOpen className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Thoughtful Reflection</h3>
            <p className="text-sm text-white/80">Express yourself freely with guided journaling prompts</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <TrendingUp className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Smart Insights</h3>
            <p className="text-sm text-white/80">AI-powered feedback and personalized wellness suggestions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;