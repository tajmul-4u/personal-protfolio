import { motion } from 'framer-motion';
import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '@/data';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Experience
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            My career journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500 via-brand-400/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-10 sm:mb-12 ${
                i % 2 === 0 ? 'sm:pr-[52%]' : 'sm:pl-[52%]'
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30 sm:left-1/2 ${
                  i % 2 === 0 ? 'sm:-translate-x-1/2' : 'sm:-translate-x-1/2'
                }`}
              >
                <Briefcase size={14} className="text-white" />
              </div>

              {/* Card */}
              <div
                className={`ml-12 sm:ml-0 ${
                  i % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                }`}
              >
                <div className="rounded-2xl glass-card p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand-500/10">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {exp.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <MapPin size={12} />
                    {exp.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <ChevronRight
                          size={16}
                          className="mt-0.5 shrink-0 text-brand-500"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
