import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Check, Copy } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { profile } from '../../data/profile';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-bg-subtle"
    >
      <div className="max-w-section mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Get In Touch</h2>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
            협업 제안이나 문의사항이 있으시면 연락주세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bg-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-blue-500" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 break-all">{profile.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 text-center px-4 py-2 text-[13px] font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                메일 보내기
              </a>
              <button
                onClick={copyEmail}
                aria-label="이메일 복사"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
              </button>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-bg-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                <Github size={18} className="text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">GitHub</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">@kimminlee</p>
              </div>
            </div>
            <p className="text-[13px] text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors font-medium">
              프로필 보기 →
            </p>
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-[13px] text-slate-400 dark:text-slate-600 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Currently open to new opportunities
        </motion.p>
      </div>
    </section>
  );
};
