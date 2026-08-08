import { motion } from 'framer-motion';
import { Download, MapPin, Briefcase } from 'lucide-react';
import { profile } from '@/data';

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            About Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Decorative gradient frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-500/30 to-accent-500/30 opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl glass-card p-2">
                <img
                  src={profile.avatar}
                  alt={`${profile.name}, ${profile.title}`}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-lg"
              >
                <Briefcase size={18} className="text-brand-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  7+ Years
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {profile.name}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={15} />
              {profile.location}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 dark:text-slate-200"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
