// js/home/camera.js

"use strict";

window.createHomeCamera = function createHomeCamera({
  cameraHorizontal,
  cameraVertical,
  cameraReset,
  baseLandscapeConfig,
  dragCameraOffset,
  clamp,
  requestRender
}) {
  function syncFromInputs() {
    dragCameraOffset.yaw = clamp(
      (Number(cameraHorizontal.value) / 100) * baseLandscapeConfig.yawRange,
      -baseLandscapeConfig.yawRange,
      baseLandscapeConfig.yawRange
    );

    dragCameraOffset.pitch = clamp(
      (Number(cameraVertical.value) / 100) * baseLandscapeConfig.pitchRange,
      -baseLandscapeConfig.pitchRange,
      baseLandscapeConfig.pitchRange
    );

    requestRender();
  }

  function reset() {
    dragCameraOffset.yaw = 0;
    dragCameraOffset.pitch = 0;
    requestRender();
  }

  function bindInputs() {
    cameraHorizontal.addEventListener("input", syncFromInputs);
    cameraVertical.addEventListener("input", syncFromInputs);
    cameraReset.addEventListener("click", reset);
  }

  return {
    bindInputs,
    reset,
    syncFromInputs
  };
};
