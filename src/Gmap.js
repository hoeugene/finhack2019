import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBs9V9H7CqLaVru5-GFRLvjkIwqGLfb5Ok'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;

// import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';
// import nike from './nike.png';
// import rightArrow from './baseline-chevron_right-24px.svg';
// import qr from './qr.svg';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyBs9V9H7CqLaVru5-GFRLvjkIwqGLfb5Ok')
// })(MapContainer)

// const AnyReactComponent = ({ text1, text2 }) => 
//   <div className="marker">
//     <img src={nike} alt="Logo" />
//       <div className="marker_wrapper">
//         {text1}<br></br>{text2}
//       </div>
//     <img src={rightArrow} alt="Logo"/>
//   </div>;

// class SimpleMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showResults: '',
//     };
//     this.handleMarkerClick = this.handleMarkerClick.bind(this);
//   }
  
//   static defaultProps = {
//     center: {
//       lat: 22.311,
//       lng: 114.165,
//     },
//     zoom: 11
//   }
  
//   handleMarkerClick(event){
//     console.log(this.showResults)
//     this.setState({
//       showResults: false,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <img src={rightArrow} alt="Logo" onClick={this.handleMarkerClick}/>
//         {this.showResults === '' ? 
//           <div style={{ height: '100vh', width: '100%'}}>
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: 'AIzaSyBs9V9H7CqLaVru5-GFRLvjkIwqGLfb5Ok' }}
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//           >
//           <AnyReactComponent onClick={this.handleMarkerClick}
//             lat={22.297191 }
//             lng={114.172406}
//             text1="Nike TST Store"
//             text2="Accepts Shoe"
//           />
            
//           </GoogleMapReact>
//           </div>
//         : null }
//         {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ql7x_2env8gTZNRKTXb4tozIu81IkTE3" width="640" height="480"></iframe> */}


//        {/* <div className='invisiBlock' onClick={this.handleMarkerClick}></div> */}
//     </div>
//     );
//   }
// }