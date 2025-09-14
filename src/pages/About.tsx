import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Problem-Market Fit Validation",
      description: "Learn how to validate if there's real demand for your idea before building anything."
    },
    {
      icon: Rocket,
      title: "Simple MVP & No-Code Validation",
      description: "Discover low-cost, no-code ways to test your concept and gather real user feedback."
    },
    {
      icon: Lightbulb,
      title: "Distribution & Go-to-Market",
      description: "Get actionable strategies for reaching your first customers and scaling growth."
    },
    {
      icon: Users,
      title: "AI Starter Prompts",
      description: "Ready-to-use AI prompts to help you dive deeper and customize ideas for your context."
    }
  ];

  const faqs = [
    {
      question: "How often are new ideas posted?",
      answer: "We publish a new startup idea every day, giving you a fresh source of inspiration and actionable frameworks to explore."
    },
    {
      question: "Are these ideas free to use?",
      answer: "Absolutely! All ideas and frameworks are completely free. Our mission is to help more people turn their entrepreneurial dreams into reality."
    },
    {
      question: "Can I suggest ideas or improvements?",
      answer: "We'd love to hear from you! While we don't have a formal submission process yet, you can reach out to us with suggestions and feedback."
    },
    {
      question: "Do you provide mentorship or coaching?",
      answer: "Currently, we focus on providing high-quality frameworks and ideas. Each idea includes detailed validation steps and AI prompts to guide your journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Turn Ideas Into Action
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            IdeaCN helps aspiring founders, indie hackers, and creators discover actionable startup ideas 
            with proven frameworks for validation, building, and growth.
          </p>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our 4-Pillar Framework
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every idea follows our structured approach to help you move from concept to launch
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-shadow text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                We believe that great ideas are everywhere, but turning them into successful ventures 
                requires the right framework and actionable steps.
              </p>
              <p>
                Too many aspiring entrepreneurs get stuck in the ideation phase or build products 
                without validating market demand. IdeaCN bridges that gap by providing daily inspiration 
                coupled with practical, battle-tested methodologies.
              </p>
              <p>
                Whether you're looking to start your first side project or launch your next big venture, 
                our curated ideas and frameworks give you the confidence and clarity to take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;