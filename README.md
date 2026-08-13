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

### Local testing

Because the site uses plain static files, it can be tested locally with a simple HTTP server.

For example:

```bash
python -m http.server 8000
