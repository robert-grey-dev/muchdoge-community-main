import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Dog, Bone, PartyPopper } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 1: Much Begin",
    items: ["Very Website", "Such Social", "Initial Wow", "Community Bark"],
    icon: Dog
  },
  {
    phase: "Phase 2: Very Growth",
    items: ["Many Listings", "Much Marketing", "Partnership Wow", "Doge Events"],
    icon: Bone
  },
  {
    phase: "Phase 3: Such Moon",
    items: ["Exchange Wow", "NFT Collection", "Global Much", "Doge World"],
    icon: PartyPopper
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#8B4513] font-comic"
        >
          Much Roadmap
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roadmapPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-[#FEF7CD] p-8 transform hover:scale-105 transition-all duration-300 border-[#FEC6A1] h-full">
                  <motion.div 
                    className="space-y-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full bg-[#FEC6A1]/20 flex items-center justify-center"
                      >
                        <Icon className="h-6 w-6 text-[#8B4513]" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#8B4513] font-comic">{phase.phase}</h3>
                    </div>
                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-3 text-[#8B4513]/80"
                        >
                          <Bone className="h-4 w-4 text-[#FEC6A1]" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;