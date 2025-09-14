import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, Target, Rocket, Zap, Copy } from "lucide-react";

export interface Idea {
  id: string;
  title: string;
  category: string;
  date: string;
  problemMarketFit: string;
  mvpValidation: string;
  distribution: string;
  aiPrompt: string;
}

interface IdeaCardProps {
  idea: Idea;
  variant?: "full" | "preview";
}

export const IdeaCard = ({ idea, variant = "full" }: IdeaCardProps) => {
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: "AI starter prompt has been copied.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const pillars = [
    {
      icon: Target,
      title: "Problem-Market Fit Validation",
      content: idea.problemMarketFit,
      color: "text-blue-600",
    },
    {
      icon: Rocket,
      title: "Simple MVP & No-Code Validation",
      content: idea.mvpValidation,
      color: "text-green-600",
    },
    {
      icon: Lightbulb,
      title: "Distribution & Go-to-Market Strategy",
      content: idea.distribution,
      color: "text-purple-600",
    },
    {
      icon: Zap,
      title: "AI Starter Prompt",
      content: idea.aiPrompt,
      color: "text-orange-600",
    },
  ];

  if (variant === "preview") {
    return (
      <Card className="card-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {idea.category}
            </Badge>
            <span className="text-xs text-muted-foreground">{idea.date}</span>
          </div>
          <CardTitle className="text-lg">{idea.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {idea.problemMarketFit.substring(0, 120)}...
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-3">
          {idea.category}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          {idea.title}
        </h1>
        <p className="text-muted-foreground">{idea.date}</p>
      </div>

      <Card className="card-shadow">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-center">Startup Framework Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-background border ${pillar.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{pillar.title}</h3>
                  </div>
                  {pillar.title === "AI Starter Prompt" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(pillar.content)}
                      className="h-8 w-8 p-0 hover:bg-accent"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-foreground leading-relaxed pl-11">{pillar.content}</p>
                {index < pillars.length - 1 && <div className="border-b border-border mt-6" />}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};