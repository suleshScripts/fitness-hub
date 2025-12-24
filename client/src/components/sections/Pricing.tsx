import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard",
    price: "49",
    period: "/mo",
    features: ["Access to Gym Floor", "Locker Room Access", "1 Free PT Session", "Free WiFi"],
    recommended: false
  },
  {
    name: "Premium",
    price: "89",
    period: "/mo",
    features: ["All Standard Features", "Unlimited Classes", "Sauna & Steam Room", "Nutritional Guide", "Guest Pass (2x/mo)"],
    recommended: true
  },
  {
    name: "Elite",
    price: "149",
    period: "/mo",
    features: ["All Premium Features", "Weekly PT Session", "Recovery Zone Access", "Priority Booking", "Merch Pack"],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-white uppercase mb-4">
            Invest In <span className="text-primary">Yourself</span>
          </h2>
          <p className="text-gray-400">No hidden fees. No contracts. Just results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-secondary p-8 md:p-10 flex flex-col ${
                plan.recommended 
                  ? "border-2 border-primary scale-105 shadow-[0_0_30px_rgba(220,38,38,0.2)] z-10" 
                  : "border border-white/5 hover:border-white/20"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl text-white uppercase mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-xl text-gray-400 font-bold">$</span>
                  <span className="text-5xl font-heading text-white font-bold">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 uppercase font-heading tracking-widest text-lg ${
                  plan.recommended 
                    ? "bg-primary hover:bg-red-700 text-white" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
