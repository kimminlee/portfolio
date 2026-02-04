import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { profile } from '../../data/profile';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300">
            협업 제안이나 문의사항이 있으시면 연락주세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-slate-300 text-sm break-all">{profile.email}</p>
            <div className="flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium">
              Send a message <ExternalLink size={16} />
            </div>
          </motion.a>

          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
          >
            <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-slate-300 text-sm">@kimminlee</p>
            <div className="flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium">
              View profile <ExternalLink size={16} />
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
              <ExternalLink size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-slate-300 text-sm">kimminlee.dev</p>
            <div className="flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium">
              You are here!
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm">
            Currently open to new opportunities and collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
};