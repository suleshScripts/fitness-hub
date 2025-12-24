import { motion } from "framer-motion";
import trainerImg from "@assets/generated_images/intense_fitness_trainer_portrait.png";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-20" />
            <img 
              src={trainerImg} 
              alt="Head Trainer" 
              className="w-full h-auto rounded-sm relative z-10 grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <div className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 inline-block mb-2">
                Head Coach
              </div>
              <h3 className="font-heading text-4xl text-white uppercase">Alex "Iron" Sterling</h3>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-none mb-6">
                Expert <br/><span className="text-primary italic">Guidance</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our trainers aren't just certified; they are elite athletes who live what they preach. 
                With backgrounds in competitive bodybuilding, sports performance, and physiotherapy, 
                you are in the safest hands.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="font-heading text-2xl text-white italic">
                  "The only bad workout is the one that didn't happen. Consistency is the code."
                </p>
              </blockquote>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="grid grid-cols-2 gap-4"
            >
              <div className="bg-secondary p-6 border-t border-primary/30">
                <h4 className="text-3xl font-heading text-white mb-1">15+</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-secondary p-6 border-t border-primary/30">
                <h4 className="text-3xl font-heading text-white mb-1">500+</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Lives Changed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
