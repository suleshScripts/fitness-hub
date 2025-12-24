import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BrandStatement() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <section id="brand" ref={containerRef} className="py-32 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-white uppercase leading-tight">
              This is <span className="text-primary">Not Just</span> A Gym.
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
          >
            We are a movement. A community of relentless individuals pushing past limits. 
            At S Square Fitness, we don't just train bodies; we forge mindsets. 
            <strong className="text-white font-bold ml-2">Consistency creates results.</strong>
          </motion.p>
        </div>
      </div>

      {/* Moving Typography Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap font-heading text-[15vw] leading-none text-white font-bold">
          DISCIPLINE POWER STRENGTH
        </motion.div>
        <motion.div 
          style={{ x: x2, WebkitTextStroke: "2px white" }} 
          className="whitespace-nowrap font-heading text-[15vw] leading-none text-transparent stroke-text font-bold"
        >
          COMMUNITY PASSION GRIT
        </motion.div>
      </div>
    </section>
  );
}
