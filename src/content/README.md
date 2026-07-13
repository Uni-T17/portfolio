# ✏️ Your content lives here

This folder holds **everything you'll want to change** about your portfolio.
You don't need to touch any component code — just edit these files. Each file
has comments and a copy-paste **TEMPLATE** at the top.

| I want to change… | Edit this file |
| --- | --- |
| My name, role, email, phone, social links, resume | `site.ts` |
| The About Me summary, goals, strengths, stats | `about.ts` |
| Skills (add/remove a skill or a whole group) | `skills.ts` |
| Projects (add a project card) | `projects.ts` |
| Work experience timeline | `experience.ts` |
| Education timeline | `education.ts` |
| The nav menu labels/order | `navigation.ts` |

## How to add something new

1. Open the matching file above.
2. Copy the **TEMPLATE** block shown in the comment at the top.
3. Paste it into the list and fill in your details.
4. Save — the page updates automatically while `npm run dev` is running.

## Notes

- **Skill icons** are matched automatically from the skill's name. If you add a
  skill whose brand icon is missing, it shows a neutral fallback. To give it a
  real logo, add one line to `skillIcons` in `../lib/icons.tsx` (guide is at the
  top of that file).
- **Project & resume images**: put files in the `public/` folder and reference
  them like `"/my-file.pdf"`.
- `types.ts` and `index.ts` are plumbing — you can ignore them.
