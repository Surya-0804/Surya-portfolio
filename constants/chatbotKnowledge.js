import { systemRules } from './knowledge/systemRules';
import { personalDetails } from './knowledge/personal';
import { skills } from './knowledge/skills';
import { experience } from './knowledge/experience';
import { education } from './knowledge/education';
import { articles } from './knowledge/articles';
import { achievements } from './knowledge/achievements';

export const SYSTEM_PROMPT = `
${systemRules}

---
${personalDetails}

---
${skills}

---
${experience}

---
${education}

---
${articles}

---
${achievements}
`;
