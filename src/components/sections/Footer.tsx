import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Share2, Dog } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-[#FEC6A1]/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Dog className="h-6 w-6 text-[#FEC6A1]" />
                <h3 className="text-xl font-bold text-[#8B4513]">Contract</h3>
              </div>
              <p className="text-[#8B4513]/70 break-all">
                EQDoge1234MuchWowVeryTokenSuchAddress
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8B4513] mb-4">Much Disclaimer</h3>
              <p className="text-[#8B4513]/70">
                $DOGE is very meme coin. Such entertainment! Much DYOR! Wow responsible!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8B4513] mb-4">Very Links</h3>
              <div className="flex justify-center md:justify-start space-x-6">
                <Twitter className="h-6 w-6 text-[#FEC6A1] hover:text-[#8B4513] cursor-pointer transition-colors" />
                <MessageCircle className="h-6 w-6 text-[#FEC6A1] hover:text-[#8B4513] cursor-pointer transition-colors" />
                <Share2 className="h-6 w-6 text-[#FEC6A1] hover:text-[#8B4513] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
