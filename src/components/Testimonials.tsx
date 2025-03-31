
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah L.",
    role: "Student",
    content: "MindEase has been my go-to support when I feel overwhelmed with school stress. The mindfulness exercises have helped me stay focused and calm during exam periods.",
    stars: 5
  },
  {
    name: "Michael T.",
    role: "Software Engineer",
    content: "As someone who works long hours, I've found MindEase to be incredibly helpful for managing work-related anxiety. The personalized suggestions are spot-on.",
    stars: 5
  },
  {
    name: "Jessica P.",
    role: "Healthcare Worker",
    content: "After long shifts, chatting with MindEase helps me process my emotions and unwind. It's become an essential part of my self-care routine.",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-mindease-light/30">
      <div className="mindease-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="mindease-gradient-text">Users Say</span></h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how MindEase is helping people improve their mental wellbeing every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mindease-card flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
