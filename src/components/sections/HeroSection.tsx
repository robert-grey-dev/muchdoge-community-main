import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Wallet, Copy, Dog, Bone, PartyPopper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("EQDoge1234MuchWowVeryTokenSuchAddress");
    toast({
      title: "Much Copy!",
      description: "Very address, such clipboard",
    });
  };

  return (
    <section className="relative py-20 bg-[#FEF7CD]">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZFQzZBMSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIvPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-1 bg-[#FEC6A1] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="/doge-uploads/37b134c7-8c5d-4ac6-85be-e242b52870e8.png" 
              alt="Doge Mascot"
              className="w-48 h-48 object-contain relative animate-bounce-slow"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl font-bold text-[#8B4513] font-comic">
              Such $DOGE
            </h1>
            <p className="text-2xl text-[#8B4513]/80 font-comic">
              Very Currency! Much Fun! 🐕
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-6 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-[#FEC6A1] hover:bg-[#FDB185] text-[#8B4513] font-bold transform hover:scale-105 transition-all duration-300"
            >
              <Dog className="mr-2 h-5 w-5" /> Buy $DOGE
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FEC6A1] text-[#8B4513] hover:bg-[#FEC6A1]/10"
              onClick={handleCopyAddress}
            >
              <Copy className="mr-2 h-5 w-5" /> Much Copy
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
            {[
              { icon: Bone, title: "Much Rewards", desc: "Very passive income, such gains!" },
              { icon: PartyPopper, title: "Such Community", desc: "Many friends, very welcome!" },
              { icon: Dog, title: "Very Safe", desc: "Much secure, wow protection!" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 shadow-lg"
              >
                <item.icon className="h-8 w-8 text-[#FEC6A1] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">{item.title}</h3>
                <p className="text-[#8B4513]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;