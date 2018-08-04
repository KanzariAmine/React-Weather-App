import React, { Component } from 'react';

/*
class Weather extends Component{
  render(){
    return(
      <div>
        {this.props.city && this.props.country && <p>Location: {this.props.city} {this.props.country} </p>}
        {this.props.temprature && <p>Temperature: {this.props.temprature}C°</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Condition: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};
*/

//
const Weather = props =>
  (
    <div>
        {props.city && props.country && <p>Location: {props.city} {this.props.country} </p>}
        {props.temprature && <p>Temperature: {props.temprature}C°</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Condition: {props.description}</p>}
        {props.error && <p>{this.props.error}</p>}
      </div>
  );

export default Weather;