import { motion } from "framer-motion";
import facilitiesImg from "@assets/generated_images/modern_sleek_gym_facilities.png";
import actionImg from "@assets/generated_images/dynamic_workout_action_shot.png";

const facilities = [
  {
    title: "Elite Equipment",
    description: "Technogym & Hammer Strength machinery for optimal biomechanics.",
    image: facilitiesImg,
    colSpan: "md:col-span-2"
  },
  {
    title: "Functional Zone",
    description: "Turf area for agility, HIIT, and athletic conditioning.",
    image: actionImg,
    colSpan: "md:col-span-1"
  },
  {
    title: "Recovery Suite",
    description: "Sauna, steam room, and cryotherapy for peak recovery.",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop", // Stock fallback for variety
    colSpan: "md:col-span-1"
  },
  {
    title: "Cardio Theater",
    description: "Immersive cardio experience with latest tech integration.",
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=2070&auto=format&fit=crop", // Stock fallback
    colSpan: "md:col-span-2"
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Space</span>
          <h2 className="font-heading text-5xl md:text-6xl text-white mt-2 uppercase">
            World Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Facilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${facility.colSpan}`}
            >
              <div className="absolute inset-0 bg-gray-900">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-3xl text-white uppercase mb-2">{facility.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {facility.description}
                </p>
                <div className="w-12 h-1 bg-primary mt-4 w-0 group-hover:w-12 transition-all duration-300 delay-200" />
              </div>

              {/* Hover Overlay Border */}
              <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
