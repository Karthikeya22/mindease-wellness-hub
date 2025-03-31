
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Brain, Heart, Shield, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const featureSlides = [
  {
    title: "AI-Powered Support",
    description: "Access personalized mental health guidance powered by advanced AI technology that learns and adapts to your needs.",
    icon: <Brain className="h-12 w-12 text-mindease-primary" />,
    color: "from-mindease-primary to-mindease-secondary"
  },
  {
    title: "Daily Check-ins",
    description: "Track your mood patterns and emotional well-being with simple, effective daily check-ins.",
    icon: <Heart className="h-12 w-12 text-rose-500" />,
    color: "from-rose-400 to-rose-600"
  },
  {
    title: "Private & Secure",
    description: "Your conversations and data are fully encrypted and never shared, ensuring complete privacy.",
    icon: <Shield className="h-12 w-12 text-emerald-500" />,
    color: "from-emerald-400 to-emerald-600"
  },
  {
    title: "Guided Exercises",
    description: "Access a library of meditation, breathing, and mindfulness exercises for immediate relief.",
    icon: <Sparkles className="h-12 w-12 text-amber-500" />,
    color: "from-amber-400 to-amber-600"
  }
];

const CarouselSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-mindease-light/50">
      <div className="mindease-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Discover <span className="mindease-gradient-text">MindEase</span> Features
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {featureSlides.map((slide, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <div className="mindease-card h-full flex flex-col hover:scale-105 transition-transform duration-300 overflow-hidden group">
                      <div className={`h-2 w-full bg-gradient-to-r ${slide.color} rounded-t-xl group-hover:h-3 transition-all duration-300`}></div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4 rounded-full bg-mindease-light/50 p-4 w-fit">
                          {slide.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                        <ScrollArea className="flex-1 pr-4 max-h-28">
                          <p className="text-gray-600">{slide.description}</p>
                        </ScrollArea>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 mr-2" />
              <CarouselNext className="static translate-y-0 h-10 w-10 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
