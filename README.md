# Weaver

A brutally simple Hugo theme with no CSS by default. Progressive enhancement through switchable themes.

## About the Name

Weaver is named after Tim Berners-Lee's *Weaving the Web*, his 1999 autobiography about creating the World Wide Web. The metaphor of weaving interconnected documents was foundational to the web's design—a network of hyperlinked pages rather than a hierarchy.

This theme embraces that original philosophy: simple HTML, semantic markup, and content-first design. No preprocessing beyond Hugo itself. Just documents, woven together with links.

## Philosophy

- Semantic HTML first
- No CSS by default (yes, really)
- Themes are optional progressive enhancement
- Client-side theme switching with localStorage
- IndieWeb-ready with microformats2
- Works without JavaScript
- Accessible to screen readers and text-based browsers

## Quick Start

### Installation

Add Weaver as a Git submodule in your Hugo site:

```sh
cd your-hugo-site
git submodule add https://github.com/highb/weaver.git themes/weaver
```

Copy the example config as a starting point:

```sh
cp themes/weaver/config.toml.example hugo.toml
```

Edit `hugo.toml` with your site details and author info, then run:

```sh
hugo server
```

The site works immediately with no styling. Enable a default theme by setting `params.defaultTheme` in your config.

### Cloning a Site That Uses Weaver

When cloning a site that includes Weaver as a submodule, initialize it with:

```sh
git clone --recurse-submodules https://github.com/you/your-site.git
```

Or if already cloned without `--recurse-submodules`:

```sh
git submodule update --init --recursive
```

### Updating the Theme

Pull the latest version of Weaver and commit the update:

```sh
git submodule update --remote themes/weaver
git add themes/weaver
git commit -m "Update weaver theme"
```

## Themes

Three built-in themes are included:

- **brutalist** — Minimal styling, system fonts, raw structure
- **terminal** — Monospace, green-on-black hacker aesthetic
- **paper** — Print-inspired, serif fonts, warm tones

Users can switch themes via the dropdown in the footer. The choice is saved to localStorage. Each theme handles its own light/dark variants via `prefers-color-scheme`.

### Creating a Custom Theme

Add a CSS file to `static/themes/` and add an `<option>` to `layouts/partials/theme-picker.html`. Your CSS should:

- Use CSS custom properties for colors and fonts
- Include both light and dark variants via `@media (prefers-color-scheme: dark)`
- Style the `.skip-link`, `.sr-only`, and focus states for accessibility
- Keep `max-width` on `body` for readability

## IndieWeb Features

### Microformats2

Templates include microformats2 markup:

- **h-entry** on single posts (title, content, date, tags)
- **h-feed** on list pages
- **h-card** for author identity in the footer

### WebMention

Add WebMention endpoints to your config:

```toml
[params.webmention]
  endpoint = "https://webmention.io/example.com/webmention"
  pingback = "https://webmention.io/example.com/xmlrpc"
```

### rel="me" Links

Social links in your config are rendered with `rel="me"` for IndieWeb identity verification.

## Accessibility

Weaver is built to WCAG 2.1 AA standards:

- Skip-to-content link as first focusable element
- Logical heading hierarchy
- ARIA landmarks and labels
- Keyboard-accessible theme switcher with screen reader announcements
- Works in lynx, w3m, and other text-based browsers
- No reliance on JavaScript for core functionality

Automated accessibility checks run in CI via pa11y-ci.

## License

MIT
