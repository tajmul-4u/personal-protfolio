import { motion } from 'framer-motion';
import {
  Code,
  Component,
  Layers,
  Palette,
  Server,
  Database,
  Cloud,
  Container,
} from 'lucide-react';
import { skills } from '@/data';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  component: Component,
  layers: Layers,
  palette: Palette,
  server: Server,
  database: Database,
  cloud: Cloud,
  container: Container,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Skills
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technologies I work with
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A versatile toolkit spanning the full stack — from pixel-perfect UIs to scalable backends.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass-card p-5 transition-shadow hover:shadow-xl hover:shadow-brand-500/10"
              >
                {/* Hover gradient glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/0 to-accent-500/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-500/5 group-hover:to-accent-500/10 group-hover:opacity-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-400 dark:group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                  {skill.category}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/60 dark:bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
