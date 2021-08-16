import React, { useEffect, useState } from "react";
import { compose, withProps } from "recompose";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { LoaderSpinner } from "../../../components/LoaderSpinner";
import axios from "axios";

const mapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`;
const mapCustomTheme = {
  styles: [
    {
      featureType: "administrative.locality",
      elementType: "labels.text",
      stylers: [
        {
          color: "#db5752",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "poi.government",
      elementType: "geometry",
      stylers: [
        {
          color: "#db5752",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          color: "#9ac9fb",
        },
      ],
    },
  ],
};

const Map = compose(
  withProps({
    googleMapURL: mapURL,
    containerElement: <div style={{ height: "400px", margin: "2em" }} />,
    mapElement: (
      <div style={{ height: "100%", maxWidth: "1140px", margin: "0 auto" }} />
    ),
    loadingElement: <div>Cargando...</div>,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.location}
        options={mapCustomTheme}
      >
        <Marker position={props.location} />
      </GoogleMap>
    </div>
  );
});

function MapComponent(props) {
  const [location, setLocation] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorLocation, setErrorLocation] = useState(null);
  const [direction, setDirection] = useState("Perón 1525, CABA"); //Must be replace for the one in the state

  const getGeolocation = () =>
    axios.get(
      `https://nominatim.openstreetmap.org/search?q=${direction}&format=json`
    );

  const getCoordinates = async () => {
    try {
      const response = await getGeolocation();
      const { data } = response;
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      setLocation({
        ...location,
        lat: lat,
        lng: lon,
      });
    } catch (error) {
      const errorLocation = "Upsss... No se pudo cargar el contenido.";
      setErrorLocation(errorLocation);
      console.log(error);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  const showOrError = () => {
    if (errorLocation) {
      return (
        <div className="d-flex justify-content-center">
          <p
            className="alert alert-danger text-center m-4 "
            style={{ maxWidth: "1140px" }}
          >
            {errorLocation}
          </p>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "400px" }}
        >
          <LoaderSpinner />
        </div>
      );
    } else {
      return <Map location={location} />;
    }
  };

  return <div>{showOrError()}</div>;
}

export default MapComponent;
