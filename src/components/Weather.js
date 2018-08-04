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

//Used functionl Component when i return UI and  i don't the DATA
const Weather = props =>
  (
    <div className="weather__info">
        {
          props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span> </p>
        }
        {
          props.temprature && <p className="weather__key">Temperature: <span className="weather__value">{props.temprature}C°</span></p>
        }
        {
          props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>
        }
        {
          props.description && <p className="weather__key">Condition: <span className="weather__value">{props.description}</span></p>
        }
        {
          props.error && <p className="weather__error"><span>{props.error}</span></p>
        }
      </div>
  );

export default Weather;