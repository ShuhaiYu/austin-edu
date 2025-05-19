"use client";

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const Map = ({ address }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!address || !isLoaded) return;

    const geocodeAddress = async () => {
      try {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const { lat, lng } = results[0].geometry.location;
            setCoordinates({ lat: lat(), lng: lng() });
          } else {
            setError('Could not geocode address');
          }
          setLoading(false);
        });
      } catch (err) {
        setError('Geocoding failed');
        setLoading(false);
      }
    };

    geocodeAddress();
  }, [address, isLoaded]);

  if (!isLoaded) return <div className="bg-muted h-48 rounded-lg animate-pulse"></div>;
  if (loading) return <div className="bg-muted h-48 rounded-lg animate-pulse"></div>;
  if (error) return <div className="bg-muted h-48 rounded-lg flex items-center justify-center text-red-500">Map unavailable</div>;

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '12rem'
      }}
      center={coordinates}
      zoom={15}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      <Marker position={coordinates} />
    </GoogleMap>
  );
};

export default Map;