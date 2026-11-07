/** Admin-ready category tree. Counts/activity stay empty until stage 3+. */

export type CategoryId =
  | "official"
  | "discussion"
  | "education"
  | "ideas"
  | "projects"
  | "events"
  | "interuni"
  | "help";

export type SubsectionDef = {
  id: string;
  /** i18n key under categories.<cat>.subs.<id> */
};

export type CategoryDef = {
  id: CategoryId;
  icon: string;
  subsections: string[];
};

export const CATEGORIES: CategoryDef[] = [
  {
    id: "official",
    icon: "official",
    subsections: ["announcements", "news", "org", "important", "feedback-lead"],
  },
  {
    id: "discussion",
    icon: "discussion",
    subsections: ["free", "civic", "current", "opinions", "debates"],
  },
  {
    id: "education",
    icon: "education",
    subsections: ["law", "history", "languages", "it", "science", "contests", "materials"],
  },
  {
    id: "ideas",
    icon: "ideas",
    subsections: ["propose", "discuss", "allies", "joint", "social-good"],
  },
  {
    id: "projects",
    icon: "projects",
    subsections: ["active", "looking", "working", "results", "archive"],
  },
  {
    id: "events",
    icon: "events",
    subsections: ["upcoming", "conferences", "debates-contests", "edu-events", "outcomes"],
  },
  {
    id: "interuni",
    icon: "interuni",
    subsections: ["representation", "joint", "international", "exchange", "partners"],
  },
  {
    id: "help",
    icon: "help",
    subsections: ["newcomers", "support", "assistance", "forum-ideas"],
  },
];

export function getCategory(id: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export const SITE_URL = "https://ubicoft.github.io/novaya-orbita/";
