export type StarterPrompt = {
  title: string;
  prompt: string;
};

export const starterPrompts: StarterPrompt[] = [
  {
    title: "PMF Stuck",
    prompt: "My AI product still does not have PMF. Should I keep going, pivot, or kill it?",
  },
  {
    title: "MVP Scope",
    prompt: "I am building an MVP. Which features should I resist building, and which risks must I test?",
  },
  {
    title: "Distribution Anxiety",
    prompt: "Growth is stuck. I cannot tell if the problem is traffic, positioning, conversion, or weak product value.",
  },
  {
    title: "Competition And Fundraising",
    prompt: "A competitor is raising fast and it is distorting my judgment. How should I choose my pace and battlefield?",
  },
];
