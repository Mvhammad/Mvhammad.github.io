// js/home/geometry.js

"use strict";

window.HomeGeometry = Object.freeze({
  rawProjectPointWithCamera(x, y, z, camera) {
    const centerX = 0.28;
    const centerY = 0.24;
    const worldX = (x - centerX) * 190;
    const worldZ = (y - centerY) * 150;
    const worldY = -(z + 0.55) * 170;

    const cosA = Math.cos(camera.azimuth);
    const sinA = Math.sin(camera.azimuth);
    const cosE = Math.cos(camera.elevation);
    const sinE = Math.sin(camera.elevation);

    const rotatedX = worldX * cosA - worldZ * sinA;
    const rotatedZ = worldX * sinA + worldZ * cosA;
    const tiltedY = worldY * cosE - rotatedZ * sinE;

    return {
      x: rotatedX,
      y: tiltedY,
      z
    };
  },

  pointsString(points) {
    return points
      .map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`)
      .join(" ");
  }
});
