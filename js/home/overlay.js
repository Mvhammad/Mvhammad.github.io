// js/home/overlay.js

"use strict";

window.createHomeOverlay = function createHomeOverlay({
  areaThemes,
  icons,
  heroEmphasis,
  selectedIcon,
  selectedTitle,
  selectedThumb,
  selectedAccent,
  selectedBlurb,
  selectedCta,
  mobileIcon,
  mobileTitle,
  mobileBlurb,
  mobileCta
}) {
  function rgba(rgb, alpha) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  }

  function getTheme(key) {
    return areaThemes[key] || areaThemes["machine-learning"];
  }

  function applyCardTheme(key) {
    const theme = getTheme(key);

    selectedIcon.style.background = theme.accent;
    selectedAccent.style.background = theme.accent;
    selectedCta.style.borderColor = theme.border;
    selectedCta.style.background = theme.soft;

    mobileIcon.style.background = theme.accent;
    mobileCta.style.borderColor = theme.border;
    mobileCta.style.background = theme.soft;
  }

  function renderThumb(region) {
    const theme = getTheme(region.key);
    const fill = rgba(theme.rgb, 0.14);

    return `
      <svg viewBox="0 0 260 120" aria-hidden="true" focusable="false">
        <rect class="thumb-card" x="0.5" y="0.5" width="259" height="119" rx="14"></rect>
        <path d="M 74 72 C 80 54, 96 42, 120 38 C 144 34, 166 38, 182 48 C 192 54, 196 62, 194 72 C 190 82, 178 90, 160 94 C 138 98, 114 96, 96 88 C 82 82, 72 78, 74 72 Z" fill="${fill}"></path>
        <path class="thumb-contour soft" d="M 70 72 C 76 58, 92 46, 118 42 C 140 38, 160 40, 176 50 C 186 56, 190 62, 188 70 C 184 80, 172 88, 156 90 C 136 94, 114 92, 98 86 C 84 82, 68 78, 70 72 Z"></path>
        <path class="thumb-contour" d="M 84 72 C 90 62, 102 54, 120 52 C 136 50, 150 52, 160 58 C 168 62, 172 67, 170 72 C 166 78, 158 83, 146 85 C 132 88, 116 86, 104 82 C 92 78, 82 75.5, 84 72 Z"></path>
        <path class="thumb-contour" d="M 98 72 C 102 65, 110 60, 122 58.5 C 132 57, 142 58, 150 62 C 156 65, 158 69, 156 72 C 154 76, 148 79.5, 140 81 C 128 83, 116 82, 106 79 C 100 76.8, 96.5 74, 98 72 Z"></path>
        <path class="thumb-contour soft" d="M 112 72 C 114 67.8, 118 64.8, 126 64 C 132 63.5, 138 64.2, 144 66.8 C 147 68.8, 148 70.8, 147 72.8 C 145 75.8, 140 77.5, 134 78.2 C 126 79, 118.5 78.2, 114 76 C 111.5 74.8, 111 73.2, 112 72 Z"></path>
        <circle class="thumb-minimum" cx="134" cy="72" r="4" fill="${theme.accent}"></circle>
      </svg>
    `;
  }

  function updateOverlay(region) {
    const theme = getTheme(region.key);

    heroEmphasis.style.color = theme.accent;
    heroEmphasis.style.fontWeight = "600";

    applyCardTheme(region.key);

    selectedIcon.innerHTML = icons[region.key];
    selectedTitle.textContent = region.cardLabel;
    selectedThumb.innerHTML = renderThumb(region);
    selectedBlurb.textContent = region.blurb;
    selectedCta.href = region.href;
    selectedCta.textContent = region.cta;

    mobileIcon.innerHTML = icons[region.key];
    mobileTitle.textContent = region.cardLabel;
    mobileBlurb.textContent = region.blurb;
    mobileCta.href = region.href;
    mobileCta.textContent = region.cta;
  }

  return {
    getTheme,
    updateOverlay
  };
};
