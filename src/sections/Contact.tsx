import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Let's Work Together
          </motion.h2>
          <p className="text-gray-400">
            Have a project in mind? Get in touch and let's create something amazing.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="mailto:ivaylo@headless.team"
            className="group flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all max-w-md w-full"
          >
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
              <Mail size={24} />
            </div>
            <div className="text-left flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-0.5">Email Me</h3>
              <p className="text-blue-400 group-hover:text-blue-300 transition-colors truncate">
                ivaylo@headless.team
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
