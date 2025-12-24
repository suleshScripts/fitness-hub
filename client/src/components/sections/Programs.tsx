import { motion } from "framer-motion";
import { Dumbbell, Flame, Activity, HeartPulse } from "lucide-react";

const programs = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Strength & Hypertrophy",
    description: "Scientifically designed programs to build lean muscle mass and raw power."
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Fat Loss & Conditioning",
    description: "High-intensity interval training to shred fat and boost metabolism."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Functional Fitness",
    description: "Movement-based training to improve real-world strength and agility."
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Yoga & Mobility",
    description: "Restore balance, flexibility, and mental focus with expert led sessions."
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-7xl text-white uppercase">
              Training <br/> <span className="text-primary">Programs</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-sm text-right"
          >
            Expertly crafted programs tailored to your specific goals. 
            Choose your path to greatness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-white/5 p-8 group hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 text-primary">
                {program.icon}
              </div>
              
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {program.icon}
              </div>
              
              <h3 className="font-heading text-2xl text-white uppercase mb-4">{program.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {program.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                Learn More <div className="h-[1px] w-8 bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
