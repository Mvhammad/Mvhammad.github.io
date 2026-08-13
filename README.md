## Homepage architecture

The homepage is a static GitHub Pages site built with plain HTML, CSS, and JavaScript.

### Structure

- `index.html` — semantic page structure and homepage initialization
- `css/pages/home.css` — homepage-specific styles
- `js/home/config.js` — region metadata, colors, and landscape configuration
- `js/home/dom.js` — required DOM element lookups and defensive checks
- `js/home/overlay.js` — selected-region card and thumbnail updates
- `js/home/camera.js` — camera slider and reset behavior
- `js/home/geometry.js` — shared projection and SVG geometry helpers
- `js/home/renderer.js` — extracted landscape rendering helpers

### Regions

The five homepage regions are configured in `js/home/config.js`:

- Mathematics
- Computer Science
- Learning Systems
- Software Engineering
- Research

To change a region's label, description, color, position, or route, start in `js/home/config.js`.

### Deployment

The site is deployed with GitHub Pages from the repository's `main` branch.

Changes committed to `main` are published automatically after GitHub Pages finishes rebuilding the site.

### Refactoring rule

Preserve a known-good backup before major structural changes.

After each refactor, verify:

- desktop layout
- mobile layout
- region selection
- keyboard focus
- touch/hover behavior
- camera drag
- horizontal and vertical camera controls
- reset behavior
