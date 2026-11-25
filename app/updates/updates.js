import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiAuth0, SiGooglegemini, SiVultr } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

/*
  To add something to the Updates page, copy an entry below and edit it.
  Entries are grouped by `year` automatically (newest year first),
  and show up in the order you write them inside each year.

  {
    year: 2026,                         // which year section it goes in
    kind: "work",                       // work | school | club | project (see kinds in page.js)
    title: "Software Engineer Intern",
    org: "JPMorgan Chase",              // optional
    date: "June 2026 - August 2026",    // optional
    points: ["did a thing", "..."],     // optional bullet points
    image: "/assets/something.png",     // optional, put the file in public/assets
    stack: [FaReact, RiNextjsLine],     // optional tech icons (from react-icons)
    link: "https://github.com/...",     // optional github link
  }
*/

export const updates = [
  {
    year: 2027,
    kind: "school",
    title: "Graduating from Texas A&M University (soon!)",
    org: "Texas A&M University - College Station, TX",
    date: "May 2027",
    points: ["B.S. in Computer Science, Minor in Mathematics", "4.0 GPA"],
  },
  {
    year: 2026,
    kind: "work",
    title: "Software Engineer Intern",
    org: "JPMorgan Chase",
    date: "June 2026 - August 2026",
    points: [
      "Built an end-to-end Python machine-learning pipeline that detected semantically similar legal documents, reducing manual document-reference work in regulatory compliance workflows",
      "Benchmarked vector-similarity and semantic-embedding approaches to improve document-matching accuracy and processing efficiency",
      "Partnered with cross-functional engineering and business stakeholders in an Agile environment to turn workflow requirements into model and pipeline improvements",
    ],
  },
  {
    year: 2026,
    kind: "project",
    title: "GradPrix",
    date: "January 2026",
    points: [
      "Advising platform for undergrads who need help with their degree planner, with degree plans for students in over 100+ universities",
      "Used cloud services like Vultr and Auth0 (plus Gemini) to build out the infrastructure and keep the platform properly managed",
    ],
    image: "/assets/gradprix.png",
    stack: [RiNextjsLine, FaReact, SiAuth0, SiGooglegemini, SiVultr],
    link: "https://github.com/Prunuus/tamuhack26",
  },
  {
    year: 2025,
    kind: "work",
    title: "Software Engineer Intern",
    org: "Halliburton",
    date: "May 2025 - August 2025",
    points: [
      "Proposed and built an AI-assisted software service that automated upgrades and debugging across 200+ microservices within Halliburton Digital Services",
      "Identified limitations in the original project approach, designed an alternative workflow, and improved execution speed by nearly 10x",
      "Collaborated with 5+ engineers in Agile sprints to develop and iterate on the service within an existing microservices environment",
    ],
  },
  {
    year: 2025,
    kind: "work",
    title: "AI Technical Advisor Intern",
    org: "Scale AI",
    date: "January 2025 - May 2025",
    points: [
      "Evaluated 100+ LLM-generated responses across SOTA models, applying standardized quality criteria to identify reasoning, factuality and instruction-following failures",
      "Developed evaluation rubrics, prompts, test cases and feedback that improved quality, consistency, accuracy and review efficiency by nearly 50%",
    ],
  },
  {
    year: 2024,
    kind: "work",
    title: "Software Engineer Intern",
    org: "Switchless",
    date: "August 2024 - May 2025",
    points: [
      "Integrated Matter over Thread applications enabling off-the-wifi connection between products",
      "Implemented a Python Huey service to allow for multi-thread processing and prioritization of task queues",
    ],
  },
  {
    year: 2024,
    kind: "club",
    title: "Project Manager",
    org: "Aggie Coding Club",
    date: "August 2024 - August 2025",
    points: [
      "Led a team of 10+ project members in building Rate My Tutor, a full stack app following a RESTful architecture",
      "Organized weekly programming workshops on SQL and NoSQL databases, design patterns, and version control",
    ],
    image: "/assets/RMTpreview.gif",
    stack: [SiMongodb, RiNextjsLine, FaReact, FaNodeJs],
    link: "https://github.com/aggie-coding-club/Rate-My-Tutor",
  },
  {
    year: 2024,
    kind: "project",
    title: "AI Flashcards",
    date: "August 2024",
    points: [
      "Uses OpenAI to help students create flashcards based off of topics they put into a prompt, and lets them save the flashcards to their account for extra practice",
    ],
    image: "/assets/flash.png",
    stack: [SiMongodb, RiNextjsLine, FaReact, FaNodeJs],
    link: "https://github.com/Prunuus/ai-flashcards",
  },
];

// Shown as chips under the timeline. Add a group or a skill by adding to these lists.
export const skills = {
  "Languages": ["Python", "JavaScript", "TypeScript", "C++", "C#", "C", "Go", "Swift", "SQL", "NoSQL"],
  "Tools": ["Git", "GitHub", "AWS", "Firebase", "Jira", "VSCode", "Microsoft Azure", "UNIX", "Xcode", "ECS", "SQS", "Step Functions"],
  "Frameworks / Libraries": ["React", "Vue", "Angular", "Next.js", "DynamoDB", "MongoDB", "scikit-learn"],
  "Things I like": ["Video Games", "Pokemon", "Cooking", "Typing at 150wpm", "Making sourdough", "Playing with my cat Linux"],
};
