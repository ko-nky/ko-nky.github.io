Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOWFmYmEwZi1jN2U4LTQ1MDQtYjdjYi0xMjBlOWQwNmJkMWEiLCJpZCI6MTAzMzQwLCJpYXQiOjE2NTk0MzAzNjF9.b3DTpz5nZN9VLt2ZEanwyxWWILG_Ns9vuwAPo3b_u9E';
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
  baseLayerPicker: false,
});
const scene = viewer.scene;
const primitives = scene.primitives;

const baseTileset = new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(1363490)
});
const colTileset = new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(1363491)
});
primitives.add(baseTileset);
primitives.add(colTileset);
viewer.zoomTo(baseTileset, new Cesium.HeadingPitchRange(0, -0.5, 0));

Sandcastle.addToggleButton("Show hatmap", true, function (
  checked
) {
	var picking = checked;
    if (picking){
      baseTileset.show = checked;
      colTileset.show = checked;
    } else {
      baseTileset.show = !checked;
      colTileset.show = checked;
   }
});

