import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Gmap from "./Gmap";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <p>fffff</p>
    );
  }
}
class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: true,
      step: '',
      content: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.showMap);
    this.setState({ showMap: false });
    // if (this.state.step === 1) {
    //   this.setState({ showMap: true });
    // } else {
    //   this.setState({ showMap: false });
    // }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    
    return (
      //Important! Always set the container height explicitly
      <div>
      <button
            // lat={59.955413}
            // lng={30.337844}
            // text="My Marker"
            onClick={this.handleSubmit}
      />
      <div>
        <button onClick={this.handleSubmit} value={'test'}>test</button>
        {/* {this.state.showMap ? <Gmap />: null } */}
        <Gmap/>
      </div>
      </div>
    );
  }
}
 
export default app;

      // <div style={{ height: '100vh', width: '100%' }}>
      //  <GoogleMapReact
      //     bootstrapURLKeys={{ key: 'AIzaSyDW8N7FAKNX5MnxJPH8eqXPZt7MO0RkUcE' }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     <AnyReactComponent
      //       lat={59.955413}
      //       lng={30.337844}
      //       text="My Marker"
      //     />
      //   </GoogleMapReact>