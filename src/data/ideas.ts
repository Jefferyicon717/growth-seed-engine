import { Idea } from "@/components/idea-card";

export const sampleIdeas: Idea[] = [
  {
    id: "1",
    title: "AI-Powered Local Service Marketplace",
    category: "B2B SaaS",
    date: "December 14, 2024",
    problemMarketFit: "Small local service providers (plumbers, electricians, cleaners) struggle to get consistent bookings and manage their schedules efficiently. They often rely on word-of-mouth or expensive lead generation services. Meanwhile, customers find it difficult to quickly find reliable, available local services with transparent pricing.",
    mvpValidation: "Build a simple landing page using Carrd or Webflow that collects service provider emails and customer requests in specific ZIP codes. Create a WhatsApp group or simple Airtable form where you manually match requests with providers for 2 weeks. Validate demand by tracking conversion rates and gathering feedback from both sides.",
    distribution: "Start with one specific service (e.g., house cleaning) in one city. Partner with local Facebook community groups and NextDoor neighborhoods. Offer the first 50 customers a 20% discount. Create simple referral incentives for both customers and service providers. Use local SEO and Google My Business optimization.",
    aiPrompt: "You're building a local service marketplace MVP. Generate a detailed go-to-market strategy for [YOUR_CITY] focusing on [SERVICE_TYPE]. Include: 1) Target customer personas 2) Initial pricing strategy 3) Partner acquisition tactics 4) Content marketing plan 5) Key metrics to track in the first 90 days."
  },
  {
    id: "2",
    title: "Micro-Learning Platform for Busy Professionals",
    category: "EdTech",
    date: "December 13, 2024",
    problemMarketFit: "Working professionals want to learn new skills but lack time for lengthy courses. Traditional online learning platforms require 1-2 hour commitments per session, which doesn't fit into busy schedules. People also struggle with course completion rates and retaining information from long-form content.",
    mvpValidation: "Create a simple email course delivered via ConvertKit or Mailchimp with 5-minute daily lessons on a specific skill (e.g., public speaking, Excel shortcuts). Test with 100 subscribers over 2 weeks. Track open rates, completion rates, and collect feedback surveys. Use Loom to create short video lessons and host them on a basic Notion page.",
    distribution: "Target LinkedIn with organic content about productivity and learning hacks. Join relevant professional Facebook groups and Reddit communities (r/productivity, r/careeradvice). Partner with corporate HR departments for lunch-and-learn pilots. Create lead magnets like '10 Skills You Can Learn in 10 Minutes' to capture emails.",
    aiPrompt: "Design a micro-learning curriculum for [SKILL/TOPIC] aimed at [TARGET_PROFESSION]. Structure it as: 1) 7-day course outline with 5-minute daily lessons 2) Learning objectives for each day 3) Practical exercises that take under 3 minutes 4) Assessment methods 5) Pricing strategy for premium tiers."
  },
  {
    id: "3",
    title: "Sustainable Fashion Rental for Special Events",
    category: "Consumer",
    date: "December 12, 2024",
    problemMarketFit: "People spend hundreds of dollars on outfits for special events (weddings, galas, work events) that they wear only once. This creates financial strain and environmental waste. Existing rental services are often expensive, have limited sizes, or poor quality control.",
    mvpValidation: "Start with your own wardrobe and friends' special occasion outfits. Create an Instagram account showcasing available pieces with simple booking via DMs. Charge 20% of retail value for 3-day rentals. Test with 20 rentals over 4 weeks in your local area. Use a simple Google Form for bookings and track demand patterns.",
    distribution: "Partner with local boutiques to feature their past-season inventory. Target college campuses and young professional groups on social media. Create TikTok content showing outfit styling and transformation videos. Collaborate with local event planners and wedding vendors for cross-promotion.",
    aiPrompt: "Create a business plan for a sustainable fashion rental service in [YOUR_CITY]. Include: 1) Inventory sourcing strategy 2) Pricing model for different garment categories 3) Logistics for cleaning and delivery 4) Customer acquisition cost projections 5) Competitive analysis against existing rental platforms."
  }
];

export const getIdeaByDate = (date: Date): Idea => {
  // Simple logic to rotate through ideas based on date
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const ideaIndex = dayOfYear % sampleIdeas.length;
  return sampleIdeas[ideaIndex];
};

export const getAllIdeas = (): Idea[] => {
  return sampleIdeas;
};