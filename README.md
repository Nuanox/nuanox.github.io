# nuanox.github.io

A personal archive of thoughts, spoken and written. Built with Hugo, hosted on GitHub Pages.

## Structure

```
content/
  archive/           -- STT voice recordings, one file per entry
    _index.md         -- section landing page
    YYYY-MM-DD-*.md   -- individual archive entries
  posts/              -- written blog posts
    _index.md         -- section landing page
    YYYY-MM-DD-*.md   -- individual posts
  about.md            -- about page
themes/
  primary-warm/       -- custom theme (CSS variables, easy to swap)
hugo.toml             -- site configuration
```

## Adding content

### Archive entry

Create a file in `content/archive/` with this front matter:

```yaml
---
title: "subject or summary"
date: 2026-03-04T21:00:00+09:00
tags: ["tag1", "tag2"]
type: archive
draft: false
---

Your STT text goes here.
```

File naming convention: `YYYY-MM-DD-topic-slug.md`

### Blog post

Create a file in `content/posts/` with this front matter:

```yaml
---
title: "Post title"
date: 2026-03-04T22:00:00+09:00
tags: ["tag1"]
draft: false
---

Your written content here.
```

## Local development

```bash
hugo server -D
```

Opens at `http://localhost:1313`. The `-D` flag includes draft content.

## Deployment

Push to `main` branch. GitHub Actions will build and deploy automatically.

```bash
git add .
git commit -m "feat: add new entry"
git push origin main
```

## Theme customization

Colors are defined as CSS variables in `themes/primary-warm/static/css/style.css`.
To change the look, edit the `:root` block. A dark mode can be added by defining
an alternative set of variables under a `@media (prefers-color-scheme: dark)` block.

## Obsidian integration

Open the project root as an Obsidian vault. The `content/` folder contains
standard markdown files with YAML front matter, which Obsidian renders natively.
