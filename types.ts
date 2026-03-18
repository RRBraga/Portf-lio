
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Skill {
  name: string;
  description: string;
}

export interface Hobby {
  name: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}
