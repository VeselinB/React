import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
export class MapContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }


    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    render() {
        const style = {


            position: 'relative',
            width: '86vw',
            height: '76vh',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'margin-top': '102px'
        }
        return (
            <Map google={this.props.google}
                initialCenter={{ lat: 42.690510, lng: 23.331694 }}
                zoom={17}
                style={style}
                containerStyle={{ position: 'relative' }}
                // containerElement={{ position: 'relative' }}
                // mapElement={{ position: 'relative' }}
                onClick={this.onMapClick}
            >
                <Marker onMouseover={this.onMarkerClick}
                    name={'Current location'} visible={true} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <div>
                        <h3>Kids Corner</h3>
                        <p>Sofia, Bulgaria<br />
                            Ivan Vazov str. 14A floor 2 <br />
                            <a href="tel: +359 2 978 65 43"> phone: +359 2 978 65 43</a><br /></p>
                        <a href="mailto:kidsCorner@kidsCorner.com">Send us an Email</a>
                    </div>
                </InfoWindow>
            </Map>
        );
    }


}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAUzCosZqfDD_HJc9jTj8cP-hLNe0v__3U'
})(MapContainer)