# Aleena Bosco Kurumthottam · Personal Website

**Live site:** [aleena-bosco.vercel.app](https://aleena-bosco.vercel.app)

My portfolio site for recruiters and collaborators: experience, research, projects, publications and skills in one place. The design follows my journey from **Abu Dhabi → Chennai → New York**, with boarding-pass and field-notebook touches, but sections are organised by type so they're quick to scan.

## What's on the site

- **Journey:** school, undergraduate and master's stops, each with grades and a link to that city's chapter
- **Experience logbook:** collapsible entries on a ruled notebook page
- **Research:** my coverage-aware RAG work at NYU Tandon, shown as a question, four method steps and before/after results
- **Projects as postcards:** a short summary on the front, the full story on the back, with filters for LLMs & agents, Software and Applied ML
- **Publications, skills and certifications**
- **Résumé menu:** software engineering and ML versions
- **Off the clock:** clubs and leadership roles from each city, shown as postcards
- **Contact:** a departure board, LinkedIn, GitHub and a copy-email button

## Built with

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Fonts via `next/font`: Plus Jakarta Sans, Inter, JetBrains Mono and Barlow Condensed
- Deployed on [Vercel](https://vercel.com); every push to `main` deploys automatically

## How it's organised

All of the site's text lives in one file, [`content/site.ts`](content/site.ts), so updating content never means touching the components.

```
app/           pages (home and /off-the-clock) and global styles
components/    one component per section (Hero, Journey, Experience, Research, Projects, ...)
content/       site text (site.ts) and résumé list (resumes.ts)
public/        headshot and résumé PDFs
```

## Run it locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Contact

[LinkedIn](https://www.linkedin.com/in/aleena-bosco/) · [GitHub](https://github.com/AleenaBoscoK) · aleenabosco@gmail.com
