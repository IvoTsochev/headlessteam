import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const skills = [
    "React Native & Flutter",
    "iOS (Swift) & Android (Kotlin)",
    "Node.js & Python Backend",
    "UI/UX Design Principles",
    "CI/CD Pipelines",
    "App Store Optimization"
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Digital Experiences <br />
              <span className="text-blue-500">That Matter</span>
            </h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              I'm a passionate mobile developer with a focus on creating intuitive and performant applications. 
              With years of experience in the mobile ecosystem, I help brands and startups launch successful products 
              that users love.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              My approach combines technical excellence with a deep understanding of user behavior, 
              ensuring that every app I build not only functions perfectly but also delivers real value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface/50 aspect-square sm:aspect-video lg:aspect-square">
              {/* Placeholder for profile image or abstract visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/5">HT</span>
              </div>
            </div>
            
            {/* Floating stats cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-surface border border-white/10 p-6 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold text-blue-500">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-surface border border-white/10 p-6 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold text-violet-500">20+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
