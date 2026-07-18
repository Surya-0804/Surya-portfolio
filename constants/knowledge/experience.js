import { experienceData } from '../../data/experienceData';

export const experience = `
# Professional Experience

${experienceData.map(job => `
## ${job.company} (${job.role})
**Timeline:** ${job.date}
**Location:** ${job.location}
${job.clusters.map(cluster => `
**${cluster.title}**
${cluster.bullets.map(bullet => `- ${bullet}`).join('\n')}`).join('\n')}
`).join('\n')}

## Peer Feedback & Manager Reviews
- **Sai Vinay (NLP Engineer):** Strong technical growth, quick to understand issues, takes ownership end-to-end, humble and highly motivated.
- **Saikat Bank (DevOps Engineer):** Highly passionate about NLP/DB operations, always willing to step in during urgent situations.
- **Rohit Jangir (Frontend Lead):** Hardworking, listens well, delivers on time with good quality, strong growth potential.
- **Amit Kumar (NLP Lead):** Technically sound, strong work ethic, goes above and beyond to support partner teams, dependable team player, collaborative and clear communicator.
`;
