import React, { Component } from 'react';


import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather'
//Begin the Class Component
class App extends Component{

  //Begin Render Method
  render(){
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
  //End Render Method
}; 
//End Class

export default App