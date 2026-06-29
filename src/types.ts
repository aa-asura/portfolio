export interface Skill {
  id: string;
  category: string;
  title: string;
  description: string;
  whyItInterestsMe: string;
  howImImproving: string;
  iconName: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  type: 'learning' | 'contribution' | 'backend';
  period: string;
  description: string;
  details: string[];
}

export interface Project {
  id: string;
  name: string;
  overview: string;
  problemSolved: string;
  technologies: string[];
  features: string[];
  futureImprovements: string[];
  tag: string;
}
