import React from 'react';
import GoogleMap from 'google-map-react';
import './OurLocations_Map.scss';
import Map_style from './OurLocations_Map_style';

class OurLocations_Map extends React.Component{
    constructor(props){
        super(props);
    }

    static defaultProps = {
        center: {
          lat: 51.5277,
          lng: -0.0856
        },
        zoom: 11
    }

    createMapOptions = () => {
      return {
        mapTypeControl: false,
        styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }],
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false
      }
    }
  
    render() {
      return (
        <div class="bloc Our_locations">
            <h2>Our locations</h2>
            <article class="details">
                Pop & Rest<br />
                <br />
                Ground Floor - Unit 1<br />
                10-12 Bache's Street<br />
                N1 6DL<br />
                London, UK<br />
                <br />
                Tel: +44 74 9546 0742<br />
                Email: booking@popnrest.com
            </article>
            <div id="map">
                <GoogleMap
                apiKey='AIzaSyC6Pe4dxxyr-YlLlGTwhXL4Q3No6WrG3ZM' 
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom} 
                options={this.createMapOptions}
                >
                </GoogleMap>
            </div>
        </div>
      );
  }
}

export default OurLocations_Map;