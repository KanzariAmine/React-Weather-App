import React, { Component } from 'react';


import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = "971c500816d1fc09fc10a4e365e41bb3"
//Begin the Class Component
class App extends Component{

  state = {
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

//TODO: Begin the getWeatner method, in this method i fetch the API and get DATA.
getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value
  const api__call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api__call.json();
 if(city && country){
  console.log(data)
  this.setState({
   temprature: data.main.temp,
   city: data.name,
   country: data.sys.country,
   humidity: data.main.humidity,
   description: data.weather[0].description,
   error: ""
  })
 }else{
  this.setState({
    temprature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: 'Please enter the value'
   })
 }
 
}
  //Begin Render Method
  render(){
   
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
  //End Render Method
}; 
//End Class

export default App