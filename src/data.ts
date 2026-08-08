import data from '@/data.json';

export type Profile = typeof data.profile;
export type Social = (typeof data.socials)[number];
export type Stat = (typeof data.stats)[number];
export type Skill = (typeof data.skills)[number];
export type Project = (typeof data.projects)[number];
export type Experience = (typeof data.experience)[number];

export const profile: Profile = data.profile;
export const socials: Social[] = data.socials;
export const stats: Stat[] = data.stats;
export const skills: Skill[] = data.skills;
export const projects: Project[] = data.projects;
export const experience: Experience[] = data.experience;
