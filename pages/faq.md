# FAQ

> Answers to the most common questions about this template.

## General

**Is this template free to use?**

Yes! This template is released under the MIT License. Use it freely for personal or commercial projects.

**Do I need a backend server?**

No. GitHub Pages serves static files only. Everything is pure HTML, CSS, and JavaScript — no server required.

**Does Markdown rendering happen on the server?**

No. Rendering is done in the browser using [Marked.js](https://marked.js.org/) — a fast, lightweight Markdown parser. All `.md` files are fetched and rendered client-side by `index.html`.

## Deployment

**How long does it take to go live?**

Usually under 2 minutes after pushing to GitHub and enabling Pages in the repo settings.

**Can I use a custom domain?**

Yes! Go to **Settings → Pages → Custom domain** and enter your domain. Add a `CNAME` file to your repo root pointing to your GitHub Pages URL.

**Why doesn't my page update after pushing?**

GitHub Pages can take 1–3 minutes to rebuild. Try a hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) to bypass cache.

## Customization

**How do I change the color scheme?**

Edit the CSS variables in `:root` inside `assets/css/style.css`. Change `--accent` and `--bg` to retheme everything instantly.

**How do I add more pages?**

1. Create a new `.md` file inside `/pages/`
2. Add a sidebar link in `index.html`: `?page=your-filename`
3. Add it to the header nav too
4. Push and you're done!

**Can I use HTML inside the Markdown files?**

Yes. Marked.js supports inline HTML inside `.md` files. Use it sparingly for things standard Markdown can't express.
