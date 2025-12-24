import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center font-heading font-bold text-white skew-x-[-10deg]">
                S²
              </div>
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                S SQUARE <span className="text-primary">FITNESS</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-8">
              A premium fitness destination for those who demand excellence. 
              Join the movement and build your strongest version today.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white text-xl mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {["Facilities", "Trainers", "Programs", "Membership", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-xl mb-6 uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Iron Street, Fitness District<br/>Metro City, MC 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@ssquarefitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-sm overflow-hidden bg-primary p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10">
            <h3 className="font-heading text-3xl md:text-4xl text-white uppercase mb-2">Ready to Start?</h3>
            <p className="text-white/80">Book your free trial today and experience the difference.</p>
          </div>
          <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 uppercase font-heading tracking-widest skew-x-[-10deg] relative z-10">
            Get Started Now
          </Button>
          
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="mt-16 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} S Square Fitness Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
