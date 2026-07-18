import { 
  AI_Domains, 
  AI_Frameworks, 
  Infrastructure_skills, 
  Frontend_skill, 
  Workflow_skills, 
  Models_worked_with, 
  Capabilities 
} from '../index';

export const skills = `
# Technical Skills & Core Competencies

**AI Domains:** ${AI_Domains.join(', ')}
**Capabilities:** ${Capabilities.join(', ')}
**Models Worked With:** ${Models_worked_with.join(', ')}

### Frameworks & Languages
${AI_Frameworks.map(s => `- **${s.skill_name}:** ${s.appliedIn}`).join('\n')}

### Infrastructure & Backend
${Infrastructure_skills.map(s => `- **${s.skill_name}:** ${s.appliedIn}`).join('\n')}

### Frontend & UI
${Frontend_skill.map(s => `- **${s.skill_name}:** ${s.appliedIn}`).join('\n')}

### Developer Tools & Workflow
${Workflow_skills.map(s => `- **${s.skill_name}:** ${s.appliedIn}`).join('\n')}
`;
