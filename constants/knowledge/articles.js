import { articles as UIArticles } from '../articles';

export const articles = `
# Articles & Publications

Surya actively writes about AI, NLP, and software engineering.

${UIArticles.map(article => `
**${article.title}**
- **Topic:** ${article.tags.join(', ')}
- **Summary:** ${article.description}
- **Link:** ${article.link}
`).join('\n')}
`;
