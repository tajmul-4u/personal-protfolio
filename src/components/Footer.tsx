import { Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons';
import { profile, socials } from '@/data';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/50 px-6 py-12 sm:px-8 dark:border-white/5 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30">
                <Code2 size={18} strokeWidth={2.5} />
              </span>
              Alex<span className="text-gradient">.dev</span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {year} {profile.name}. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon] ?? Mail;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.icon !== 'mail' ? '_blank' : undefined}
                  rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/60 bg-white/40 text-slate-500 transition-all hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-brand-400"
                  aria-label={social.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
