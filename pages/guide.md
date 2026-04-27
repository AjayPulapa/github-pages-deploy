# Full Guide

> Everything you need to customize and extend your GitHub Pages site.

## Project Structure

```
yourrepo/
├── index.html          ← Home page
├── assets/
│   ├── css/
│   │   └── style.css   ← All styles
│   └── js/
│       └── main.js     ← All JS
└── pages/
    ├── getting-started.md
    ├── guide.md
    ├── api.md
    └── faq.md
```

## Adding New Pages

Copy any existing `.md` file in `/pages/`, rename it, and update the content. Then link to it using:

```
index.html?page=your-page-name
```

Add the link to the sidebar and header nav inside `index.html`.

> 💡 Keep the same `?page=` query pattern for all pages — `index.html` handles the rendering automatically.

## Styling

All design tokens live in `:root` CSS variables at the top of `style.css`. Change `--accent` to any color to retheme the entire site instantly.

```css
:root {
  --accent: #00e5ff;     /* primary accent */
  --accent2: #7c3aed;    /* secondary accent */
  --bg: #0d0f14;         /* page background */
}
```

## Markdown Tips

You can use all standard Markdown syntax:

- **Bold**, *italic*, `inline code`
- Headers with `#`, `##`, `###`
- Ordered and unordered lists
- Fenced code blocks with syntax label
- Blockquotes with `>`
- Tables (see API page for an example)

Links work too: [Visit GitHub](https://github.com)
