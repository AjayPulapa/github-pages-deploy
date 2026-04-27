# API Reference

> Complete reference for all available configuration options and endpoints.

## Overview

This site is static and served via GitHub Pages. There is no live backend API. The "API" here refers to the query parameters and configuration options available in `index.html`.

## Page Query Parameter

Load any Markdown page dynamically:

```
index.html?page=getting-started
index.html?page=guide
index.html?page=api
index.html?page=faq
```

If no `?page=` param is provided, `home.md` is loaded by default.

## Endpoints (Static Files)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/index.html` | Shell page — renders all MD content |
| GET | `/pages/getting-started.md` | Getting started guide |
| GET | `/pages/guide.md` | Full documentation guide |
| GET | `/pages/api.md` | This API reference |
| GET | `/pages/faq.md` | Frequently asked questions |
| GET | `/pages/home.md` | Homepage content |

## Response Format

The `index.html` fetches the `.md` file and parses it using [Marked.js](https://marked.js.org/). The result is injected into `<div id="md-content">`.

```json
{
  "source": "pages/guide.md",
  "renderer": "marked.js",
  "target": "#md-content"
}
```

## CSS Variables Reference

| Variable | Default | Description |
|----------|---------|-------------|
| `--accent` | `#00e5ff` | Primary accent color |
| `--accent2` | `#7c3aed` | Secondary accent color |
| `--bg` | `#0d0f14` | Page background |
| `--bg-surface` | `#13161e` | Sidebar / header bg |
| `--sidebar-w` | `240px` | Sidebar width |
| `--header-h` | `60px` | Header height |
