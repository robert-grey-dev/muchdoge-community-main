import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const tokenomicsData = [
  { name: 'Community', value: 50 },
  { name: 'Liquidity', value: 30 },
  { name: 'Development', value: 20 },
];

// Изменяем последний цвет (для Development) на более темный оттенок
const COLORS = ['#FEC6A1', '#FFDEE2', '#F4D03F'];

const TokenomicsSection = () => {
  return (
    <section className="py-20 bg-[#FEF7CD]/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#8B4513] font-comic"
        >
          Much Tokenomics
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6">Such Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-white p-8 transform transition-all duration-300 border-[#FEC6A1] cursor-pointer">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Total Supply</h3>
                <p className="text-4xl font-bold text-[#8B4513]">100,000,000,000</p>
                <p className="text-[#8B4513]/70 mt-2">Very $DOGE</p>
              </Card>
            </motion.div>

            <div className="grid gap-4">
              {tokenomicsData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/80 p-4 rounded-lg flex items-center space-x-4 cursor-pointer"
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <div>
                    <h4 className="font-bold text-[#8B4513]">{item.name}</h4>
                    <p className="text-[#8B4513]/70">{item.value}%</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;