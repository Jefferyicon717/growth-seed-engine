import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { CalendarWidget } from "@/components/calendar-widget";
import { IdeaCard } from "@/components/idea-card";
import { getIdeaByDate } from "@/data/ideas";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const todayIdea = getIdeaByDate(currentDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Idea of the Day
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Daily startup ideas with actionable frameworks for aspiring founders, indie hackers, and creators
            </p>
          </div>
          
          <CalendarWidget 
            currentDate={currentDate} 
            onDateChange={setCurrentDate} 
          />
          
          <IdeaCard idea={todayIdea} variant="full" />
        </div>
      </section>
    </div>
  );
};

export default Index;
