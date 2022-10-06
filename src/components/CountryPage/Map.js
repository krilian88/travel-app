import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import getTemplate from "../Language/Templates";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3JpbGlhbjg4IiwiYSI6ImNrbHc2cTc0MzJ4aW4yb24xY3o4M3dvbmwifQ.XOVr0GQZqXnu_RezLbhNEA";

const Map = ({ lat, lng, code, lang }) => {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 4,
    });

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    map.addControl(new mapboxgl.FullscreenControl());

    map.on("load", function () {
      map.addLayer(
        {
          id: "country-boundaries",
          source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
          "source-layer": "country_boundaries",
          type: "fill",
          paint: {
            "fill-color": "#d2361e",
            "fill-opacity": 0.3,
          },
        },
        "country-label"
      );

      map.setFilter("country-boundaries", ["in", "iso_3166_1_alpha_3", code]);

      const labelList = map
        .getStyle()
        .layers.filter((layer) => /-label/.test(layer.id));
      labelList.forEach((labelLayer) => {
        map.setLayoutProperty(labelLayer.id, "text-field", [
          "coalesce",
          ["get", `name_${lang}`],
          ["get", "name"],
        ]);
      });
    });

    return () => map.remove();
  }, [lang, code, lng, lat]);

  return (
    <div className="map-wrapper">
      <div className="map-sidebar">
        {`${getTemplate(lang, "lng")}: ${lng.toFixed(4)} | ${getTemplate(
          lang,
          "lat"
        )}: ${lat.toFixed(4)}`}
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
