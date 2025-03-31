
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Brain, Heart, Shield, Sparkles, CircleDot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [api, setApi] = useState<any>(null);

  // Setup intersection observer to pause when not in view
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });

  // Change active slide every 4 seconds
  useEffect(() => {
    if (!api || isPaused || !isIntersecting) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [api, isPaused, isIntersecting]);
  
  // Update active index when api changes slide
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section 
      ref={ref}
      className="py-16 bg-gradient-to-b from-white to-mindease-light/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mindease-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Discover <span className="mindease-gradient-text">MindEase</span> Features
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full" 
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {featureSlides.map((slide, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-1 md:basis-1/2 lg:basis-1/2 transition-opacity duration-300"
                >
                  <div className="p-1 h-full">
                    <div 
                      className={`mindease-card h-full flex flex-col hover:scale-105 transition-all duration-300 overflow-hidden group ${
                        activeIndex === index ? "ring-2 ring-mindease-primary/40 shadow-lg" : ""
                      }`}
                    >
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
            
            <div className="flex flex-col items-center mt-8 gap-6">
              <div className="flex items-center justify-center gap-2">
                <CarouselPrevious className="relative h-10 w-10 mr-2 hover:bg-mindease-light/80 hover:text-mindease-primary" />
                <div className="flex items-center gap-1">
                  {featureSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === index 
                          ? "bg-mindease-primary w-4" 
                          : "bg-mindease-primary/30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <CarouselNext className="relative h-10 w-10 ml-2 hover:bg-mindease-light/80 hover:text-mindease-primary" />
              </div>
              
              <button 
                onClick={() => setIsPaused(!isPaused)} 
                className="text-sm text-gray-500 hover:text-mindease-primary flex items-center gap-1"
              >
                <CircleDot className="h-3 w-3" />
                {isPaused ? "Resume autoplay" : "Pause autoplay"}
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
