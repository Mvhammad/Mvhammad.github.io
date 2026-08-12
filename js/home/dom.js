// js/home/dom.js

"use strict";

window.getHomeDom = function getHomeDom() {
  function requireElement(id) {
    const element = document.getElementById(id);

    if (!element) {
      throw new Error(`[home/dom] Missing required element: #${id}`);
    }

    return element;
  }

  return {
    selectorRow: requireElement("selector-row"),
    selectedCard: requireElement("selected-card"),
    selectedIcon: requireElement("selected-icon"),
    selectedTitle: requireElement("selected-title"),
    selectedThumb: requireElement("selected-thumb"),
    selectedAccent: requireElement("selected-accent"),
    selectedBlurb: requireElement("selected-blurb"),
    selectedCta: requireElement("selected-cta"),
    mobileIcon: requireElement("mobile-icon"),
    mobileTitle: requireElement("mobile-title"),
    mobileBlurb: requireElement("mobile-blurb"),
    mobileCta: requireElement("mobile-cta"),
    heroEmphasis: requireElement("hero-emphasis"),
    mapFrame: requireElement("map-frame"),
    mapSvg: requireElement("map-svg"),
    planeBase: requireElement("plane-base"),
    planeLayer: requireElement("plane"),
    planeActive: requireElement("plane-active"),
    floorContours: requireElement("floor-contours"),
    surfaceActive: requireElement("surface-active"),
    wireBase: requireElement("wire-base"),
    wireAccent: requireElement("wire-accent"),
    minimums: requireElement("minimums"),
    mapButtonAnchors: requireElement("map-button-anchors"),
    cameraSvgCap: requireElement("camera-cap"),
    cameraHorizontal: requireElement("camera-horizontal"),
    cameraVertical: requireElement("camera-vertical"),
    cameraHorizontalValue: requireElement("camera-horizontal-value"),
    cameraVerticalValue: requireElement("camera-vertical-value"),
    cameraReset: requireElement("camera-reset")
  };
};
