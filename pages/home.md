# Welcome to MyDocs

> A clean, responsive documentation site powered by GitHub Pages.

## What is this?

MyDocs is a lightweight documentation template built with pure HTML, CSS, and JavaScript. All content is written in **Markdown** and rendered live in the browser — no build step, no framework, no server.

## Features

- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🧭 **Quick Navigation** — Jump between sections instantly
- 📝 **Markdown-Powered** — Write content in `.md`, render in the browser
- 🎨 **Clean Design** — Readable typography with a sharp minimal aesthetic
- ⚡ **Fast & Lightweight** — Zero JS frameworks, pure performance

## How It Works

All pages are `.md` files inside the `/pages/` folder. The `index.html` shell fetches and renders whichever page is requested via the `?page=` URL parameter:

```
index.html?page=getting-started
index.html?page=guide
index.html?page=api
index.html?page=faq
```

With no parameter, this `home.md` file is loaded by default.

## Project Layout

```
yourrepo/
├── index.html           ← Single shell page
├── assets/
│   ├── css/style.css    ← All styles
│   └── js/main.js       ← Nav, scroll, rendering
└── pages/
    ├── home.md          ← Default (this page)
    ├── getting-started.md
    ├── guide.md
    ├── api.md
    └── faq.md
```

## Next Steps

- Read the [Getting Started](?page=getting-started) guide
- Explore the [Full Guide](?page=guide)
- Check the [API Reference](?page=api)
- Browse the [FAQ](?page=faq)
