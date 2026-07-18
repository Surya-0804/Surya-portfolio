import { educationData } from '../../data/educationData';

export const education = `
# Education

${educationData.map(edu => `
**Degree/Certificate:** ${edu.degree}
**Institution:** ${edu.school}
**Score:** ${edu.score}
**Timeline:** ${edu.year}
`).join('\n')}
`;
