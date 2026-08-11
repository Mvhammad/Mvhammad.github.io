// js/home/config.js

"use strict";

window.HomeConfig = (() => {
  const icons = {
    "computer-science": '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M10 7 5 12l5 5M14 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mathematics: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 4 20 19H4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    "machine-learning": '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="2.1" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="4.8" r="1.45" fill="none" stroke="currentColor" stroke-width="1.35"/><circle cx="18.3" cy="8.4" r="1.45" fill="none" stroke="currentColor" stroke-width="1.35"/><circle cx="18.3" cy="15.6" r="1.45" fill="none" stroke="currentColor" stroke-width="1.35"/><circle cx="12" cy="19.2" r="1.45" fill="none" stroke="currentColor" stroke-width="1.35"/><circle cx="5.7" cy="15.6" r="1.45" fill="none" stroke="currentColor" stroke-width="1.35"/><circle cx="5.7" cy="8.4" r="1.45" fill="none" stroke="currentColor" stroke-width="1.35"/><path d="M12 10.1V6.4M13.5 10.9l3-1.6M13.5 13.1l3 1.6M12 13.9v3.7M10.5 13.1l-3 1.6M10.5 10.9l-3-1.6" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg>',
    systems: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 3 19 7v10l-7 4-7-4V7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 3v8m0 0 7-4m-7 4L5 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    projects: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H10l1.8 2H17.5A2.5 2.5 0 0 1 20 9.5v7A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
  };

  const regions = [
    {
      key: "computer-science",
      label: "Computer Science",
      cardLabel: "Computer Science",
      href: "#",
      blurb: "Computational foundations for algorithms, data structures, abstraction, programming languages, and efficient learning systems.",
      cta: "Explore Computer Science"
    },
    {
      key: "mathematics",
      label: "Mathematics",
      cardLabel: "Mathematics",
      href: "#",
      blurb: "Formal tools for reasoning about structure, uncertainty, optimization, convergence, and generalization in learning systems.",
      cta: "Explore Mathematics"
    },
    {
      key: "machine-learning",
      label: "Learning Systems",
      cardLabel: "Learning Systems",
      href: "#",
      blurb: "The central basin where data, models, training, evaluation, deployment, and feedback come together.",
      cta: "Explore Learning Systems"
    },
    {
      key: "systems",
      label: "Software Engineering",
      cardLabel: "Software Engineering",
      href: "#",
      blurb: "Projects and engineering practices for turning learning ideas into reliable, maintainable software.",
      cta: "Explore Software Engineering"
    },
    {
      key: "projects",
      label: "Research",
      cardLabel: "Research",
      href: "#",
      blurb: "Paper-driven study and literature synthesis on learning systems, their behavior, and their limitations.",
      cta: "Explore Research"
    }
  ];

  const areaThemes = {
    "computer-science": {
      rgb: [111, 135, 150],
      accent: "rgba(111, 135, 150, 0.96)",
      border: "rgba(111, 135, 150, 0.48)",
      soft: "rgba(111, 135, 150, 0.11)",
      softStrong: "rgba(111, 135, 150, 0.18)",
      halo: "rgba(111, 135, 150, 0.2)",
      ring: "rgba(111, 135, 150, 0.62)"
    },
    mathematics: {
      rgb: [138, 122, 154],
      accent: "rgba(138, 122, 154, 0.96)",
      border: "rgba(138, 122, 154, 0.48)",
      soft: "rgba(138, 122, 154, 0.11)",
      softStrong: "rgba(138, 122, 154, 0.18)",
      halo: "rgba(138, 122, 154, 0.2)",
      ring: "rgba(138, 122, 154, 0.62)"
    },
    "machine-learning": {
      rgb: [199, 146, 46],
      accent: "rgba(199, 146, 46, 0.96)",
      border: "rgba(199, 146, 46, 0.50)",
      soft: "rgba(199, 146, 46, 0.12)",
      softStrong: "rgba(199, 146, 46, 0.20)",
      halo: "rgba(199, 146, 46, 0.22)",
      ring: "rgba(199, 146, 46, 0.66)"
    },
    systems: {
      rgb: [127, 146, 124],
      accent: "rgba(127, 146, 124, 0.96)",
      border: "rgba(127, 146, 124, 0.48)",
      soft: "rgba(127, 146, 124, 0.11)",
      softStrong: "rgba(127, 146, 124, 0.18)",
      halo: "rgba(127, 146, 124, 0.20)",
      ring: "rgba(127, 146, 124, 0.62)"
    },
    projects: {
      rgb: [185, 121, 102],
      accent: "rgba(185, 121, 102, 0.96)",
      border: "rgba(185, 121, 102, 0.48)",
      soft: "rgba(185, 121, 102, 0.11)",
      softStrong: "rgba(185, 121, 102, 0.18)",
      halo: "rgba(185, 121, 102, 0.20)",
      ring: "rgba(185, 121, 102, 0.62)"
    }
  };

  const regionFields = [
    {
      key: "computer-science",
      center: { x: -1.62, y: -1.08 },
      sigmaX: 1.18,
      sigmaY: 1.0,
      color: [111, 135, 150],
      boost: 1.01
    },
    {
      key: "mathematics",
      center: { x: -1.64, y: 1.12 },
      sigmaX: 1.22,
      sigmaY: 1.02,
      color: [138, 122, 154],
      boost: 1.02
    },
    {
      key: "machine-learning",
      center: { x: 0.28, y: 0.24 },
      sigmaX: 0.96,
      sigmaY: 0.86,
      color: [199, 146, 46],
      boost: 1.34
    },
    {
      key: "systems",
      center: { x: 1.62, y: -1.08 },
      sigmaX: 1.20,
      sigmaY: 0.98,
      color: [127, 146, 124],
      boost: 1.0
    },
    {
      key: "projects",
      center: { x: 1.58, y: 1.14 },
      sigmaX: 1.18,
      sigmaY: 1.0,
      color: [185, 121, 102],
      boost: 1.0
    }
  ];

  const regionFieldMap = new Map(
    regionFields.map((entry) => [entry.key, entry])
  );

  const baseLandscapeConfig = {
    domainX: [-2.05, 2.15],
    domainY: [-1.55, 1.65],
    gridX: 27,
    gridY: 21,
    planeZ: -1.36,
    baselineAzimuth: 0.72,
    baselineElevation: 0.82,
    yawRange: 0.48,
    pitchRange: 0.34
  };

  return Object.freeze({
    icons,
    regions,
    areaThemes,
    regionFields,
    regionFieldMap,
    baseLandscapeConfig
  });
})();
