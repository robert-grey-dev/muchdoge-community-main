import React from 'react';
import { Card } from "@/components/ui/card";
import { Dog, Bone } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#8B4513] font-comic">
                About Much $DOGE
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-[#8B4513]/80 leading-relaxed">
                  Very history! $DOGE started as fun meme, became much serious. Built with love and humor, we make crypto very friendly!
                </p>
                <p className="text-lg text-[#8B4513]/80 leading-relaxed">
                  Such features! Many innovation! Join Doge pack for most wow experience in crypto. To moon! 🚀
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Dog className="h-12 w-12 text-[#FEC6A1]" />
                <Bone className="h-8 w-8 text-[#FEC6A1] animate-bounce" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-[#FEF7CD] p-6 transform hover:rotate-3 transition-all duration-300 border-[#FEC6A1]">
                <div className="text-center space-y-2">
                  <span className="text-4xl">🦴</span>
                  <h3 className="text-xl font-bold text-[#8B4513]">1%</h3>
                  <p className="text-[#8B4513]/70">Much Rewards</p>
                </div>
              </Card>
              <Card className="bg-[#FEF7CD] p-6 transform hover:-rotate-3 transition-all duration-300 border-[#FEC6A1]">
                <div className="text-center space-y-2">
                  <span className="text-4xl">🐕</span>
                  <h3 className="text-xl font-bold text-[#8B4513]">WOW</h3>
                  <p className="text-[#8B4513]/70">Very Community</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
