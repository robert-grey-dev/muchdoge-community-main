import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Share2, Dog } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-[#FEF7CD]/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Dog className="h-16 w-16 text-[#FEC6A1] mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-8 text-[#8B4513] font-comic">
            Join Much Community
          </h2>
          <p className="text-xl text-[#8B4513]/80 mb-12">
            Very welcome to most wow community in crypto! Many friends waiting! 🐕
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="bg-white hover:bg-[#FEC6A1]/20 text-[#8B4513] rounded-full w-16 h-16">
              <Twitter className="h-8 w-8" />
            </Button>
            <Button variant="ghost" className="bg-white hover:bg-[#FEC6A1]/20 text-[#8B4513] rounded-full w-16 h-16">
              <MessageCircle className="h-8 w-8" />
            </Button>
            <Button variant="ghost" className="bg-white hover:bg-[#FEC6A1]/20 text-[#8B4513] rounded-full w-16 h-16">
              <Share2 className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
