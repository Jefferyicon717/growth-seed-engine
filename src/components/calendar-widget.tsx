import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { format, addDays, subDays } from "date-fns";

interface CalendarWidgetProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export const CalendarWidget = ({ currentDate, onDateChange }: CalendarWidgetProps) => {
  const handlePrevDay = () => {
    onDateChange(subDays(currentDate, 1));
  };

  const handleNextDay = () => {
    onDateChange(addDays(currentDate, 1));
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrevDay}
        className="h-9 w-9 p-0"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center space-x-2 bg-card border rounded-lg px-4 py-2 min-w-[200px] justify-center">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium text-sm">
          {format(currentDate, "EEEE, MMMM d, yyyy")}
        </span>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleNextDay}
        className="h-9 w-9 p-0"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};