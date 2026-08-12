// js/home/renderer.js

"use strict";

window.createHomeRenderer = function createHomeRenderer({
  landscapeConfig,
  planeLayer,
  wireBase,
  wireAccent,
  projectPoint,
  pointsString
}) {
  function buildPlane() {
    const { domainX, domainY, planeZ, gridX, gridY } = landscapeConfig;
    const [minX, maxX] = domainX;
    const [minY, maxY] = domainY;

    const corners = [
      projectPoint(minX, minY, planeZ),
      projectPoint(maxX, minY, planeZ),
      projectPoint(maxX, maxY, planeZ),
      projectPoint(minX, maxY, planeZ)
    ];

    let markup = `<polyline class="shell" points="${pointsString([
      corners[0],
      corners[1],
      corners[2],
      corners[3],
      corners[0]
    ])}"></polyline>`;

    for (let yi = 0; yi < gridY; yi += 1) {
      const y = minY + (yi / (gridY - 1)) * (maxY - minY);

      markup += `<polyline class="grid" points="${pointsString([
        projectPoint(minX, y, planeZ),
        projectPoint(maxX, y, planeZ)
      ])}"></polyline>`;
    }

    for (let xi = 0; xi < gridX; xi += 1) {
      const x = minX + (xi / (gridX - 1)) * (maxX - minX);

      markup += `<polyline class="grid" points="${pointsString([
        projectPoint(x, minY, planeZ),
        projectPoint(x, maxY, planeZ)
      ])}"></polyline>`;
    }

    planeLayer.innerHTML = markup;
  }

  function buildWireframe(sample) {
  let baseMarkup = "";
  let accentMarkup = "";

  sample.rows.forEach((row, rowIndex) => {
    const projected = row.map((point) =>
      projectPoint(point.x, point.y, point.z)
    );

    baseMarkup += `<polyline points="${pointsString(projected)}" class="${
      rowIndex < sample.rows.length * 0.35 ? "rear" : "front"
    }"></polyline>`;
  });

  for (let xi = 0; xi < landscapeConfig.gridX; xi += 1) {
    const projected = sample.rows.map((row) =>
      projectPoint(row[xi].x, row[xi].y, row[xi].z)
    );

    baseMarkup += `<polyline points="${pointsString(projected)}" class="${
      xi < landscapeConfig.gridX * 0.35 ? "rear" : "front"
    }"></polyline>`;
  }

  [9, 10, 11, 12].forEach((columnIndex) => {
    const projected = sample.rows.map((row) =>
      projectPoint(
        row[columnIndex].x,
        row[columnIndex].y,
        row[columnIndex].z
      )
    );

    accentMarkup += `<polyline points="${pointsString(projected)}"></polyline>`;
  });

  wireBase.innerHTML = baseMarkup;
  wireAccent.innerHTML = accentMarkup;
}

  return {
    buildPlane,
    buildWireframe
  };
};
