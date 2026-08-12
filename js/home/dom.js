// js/home/dom.js

"use strict";

window.getHomeDom = function getHomeDom() {
  return {
    selectorRow: document.getElementById("selector-row"),
    selectedCard: document.getElementById("selected-card"),
    selectedIcon: document.getElementById("selected-icon"),
    selectedTitle: document.getElementById("selected-title"),
    selectedThumb: document.getElementById("selected-thumb"),
    selectedAccent: document.getElementById("selected-accent"),
    selectedBlurb: document.getElementById("selected-blurb"),
    selectedCta: document.getElementById("selected-cta"),
    mobileIcon: document.getElementById("mobile-icon"),
    mobileTitle: document.getElementById("mobile-title"),
    mobileBlurb: document.getElementById("mobile-blurb"),
    mobileCta: document.getElementById("mobile-cta"),
    heroEmphasis: document.getElementById("hero-emphasis"),
    mapFrame: document.getElementById("map-frame"),
    mapSvg: document.getElementById("map-svg"),
    planeBase: document.getElementById("plane-base"),
    planeLayer: document.getElementById("plane"),
    planeActive: document.getElementById("plane-active"),
    floorContours: document.getElementById("floor-contours"),
    surfaceActive: document.getElementById("surface-active"),
    wireBase: document.getElementById("wire-base"),
    wireAccent: document.getElementById("wire-accent"),
    minimums: document.getElementById("minimums"),
    mapButtonAnchors: document.getElementById("map-button-anchors"),
    cameraSvgCap: document.getElementById("camera-cap"),
    cameraHorizontal: document.getElementById("camera-horizontal"),
    cameraVertical: document.getElementById("camera-vertical"),
    cameraHorizontalValue: document.getElementById("camera-horizontal-value"),
    cameraVerticalValue: document.getElementById("camera-vertical-value"),
    cameraReset: document.getElementById("camera-reset")
  };
};
