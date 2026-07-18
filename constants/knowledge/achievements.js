import UIAchievements from '../achievements';

export const achievements = `
# Awards & Achievements

${UIAchievements.map(ach => `
**${ach.title}**
- **Organization:** ${ach.organization} (${ach.date})
- **Description:** ${ach.description}
${ach.bullets ? ach.bullets.map(b => `  - ${b}`).join('\n') : ''}
`).join('\n')}
`;
