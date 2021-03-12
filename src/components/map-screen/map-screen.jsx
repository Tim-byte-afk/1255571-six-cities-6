import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {points = [], activeCard} = props;

  const city = {latitude: 52.38333, longitude: 4.9, zoom: 12};
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.latitude,
        lng: city.longitude
      },
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    points.forEach((point) => {
      const icon = leaflet.icon({
        iconUrl: String(point.id) === String(activeCard) ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      }, {
        icon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });
  }, [activeCard]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  activeCard: PropTypes.string,
  points: PropTypes.array,
};

export default Map;
