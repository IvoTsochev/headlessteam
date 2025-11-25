import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "EcoTrack Mobile",
    category: "iOS / Android",
    description: "A sustainable lifestyle tracking app helping users monitor their carbon footprint.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "FinFlow",
    category: "Fintech",
    description: "Personal finance management dashboard with real-time market data integration.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Flutter", "Firebase", "Cloud Functions"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "HealthConnect",
    category: "Healthcare",
    description: "Telemedicine platform connecting patients with specialists for virtual consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["SwiftUI", "HealthKit", "WebRTC"],
    links: { demo: "#", github: "#" }
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of mobile applications and digital products I've crafted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-blue-400 text-sm font-medium mb-1 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
