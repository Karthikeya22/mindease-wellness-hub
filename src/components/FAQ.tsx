
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is MindEase?",
    answer: "MindEase is an AI-powered mental health chatbot designed to provide supportive conversations, mindfulness exercises, and personalized strategies to help improve your mental wellbeing."
  },
  {
    question: "Is MindEase a replacement for therapy?",
    answer: "No, MindEase is not a replacement for professional mental health care. It's designed to be a supplementary tool that provides support and resources, but it should not be used as a substitute for professional therapy or medical advice."
  },
  {
    question: "How does MindEase protect my privacy?",
    answer: "We take privacy seriously. All conversations with MindEase are encrypted and confidential. We do not share your personal information with third parties, and you can request data deletion at any time. Please see our privacy policy for more details."
  },
  {
    question: "Is MindEase free to use?",
    answer: "MindEase offers both free and premium tiers. The free version provides access to basic features, while the premium subscription offers unlimited conversations, additional resources, and more personalized support."
  },
  {
    question: "Can I use MindEase on multiple devices?",
    answer: "Yes, MindEase is accessible across all your devices. Simply log in with your account, and your conversation history and preferences will sync automatically."
  },
  {
    question: "How accurate is MindEase's AI?",
    answer: "MindEase uses advanced AI technology that's been trained on mental health resources and therapeutic approaches. While it's designed to provide helpful and supportive responses, it's continuously learning and improving. Remember that it's a supportive tool, not a perfect substitute for human professionals."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="mindease-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="mindease-gradient-text">Questions</span></h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about MindEase and how it can support your mental wellness journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-mindease-light/30 rounded-t-lg">
                  <span className="text-left font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
