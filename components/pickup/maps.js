import React, { Component } from 'react';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // Load the Google Maps JavaScript API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize the map once the Google Maps API is loaded
    script.onload = () => {
      this.initMap();
    };
  }

  initMap() {
    const mapOptions = {
      center: { lat: 51.5074, lng: 0.1278 }, // Contoh: Koordinat tengah untuk London
      zoom: 12, // Tingkat zoom
    };

    const map = new window.google.maps.Map(this.mapRef.current, mapOptions);

    // Anda dapat menambahkan marker atau layer lainnya ke peta di sini
  }

  render() {
    return (
      <div
        ref={this.mapRef}
        style={{ width: '100%', height: '400px' }}
      />
    );
  }
}

export default MapComponent;
