import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_dark_gym_hero_background_with_red_lighting.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with parallax effect simulation via fixed positioning if needed, or just absolute */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Gym Hero Background"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
          >
            Welcome to the Next Level
          </motion.h2>

          <h1 className="font-heading font-bold text-5xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 uppercase italic">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Strongest</span> <br />
            Version
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Fitness Hub is not just a gym. It's a sanctuary for those who refuse to settle for average.
            Experience the future of fitness.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-red-700 text-white font-heading text-xl px-10 py-8 uppercase tracking-widest skew-x-[-10deg] group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                Book Free Trial <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 hover:bg-white/10 text-white font-heading text-xl px-10 py-8 uppercase tracking-widest skew-x-[-10deg] backdrop-blur-sm"
            >
              View Programs
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
