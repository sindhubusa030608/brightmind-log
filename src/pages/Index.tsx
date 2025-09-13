import HeroSection from "@/components/HeroSection";
import MoodTracker from "@/components/MoodTracker";
import ReflectionJournal from "@/components/ReflectionJournal";
import WellnessDashboard from "@/components/WellnessDashboard";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MoodTracker />
      <ReflectionJournal />
      <WellnessDashboard />
    </main>
  );
};

export default Index;
