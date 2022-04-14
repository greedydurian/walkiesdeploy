import React, { Component } from "react";
import Button from '@mui/material/Button';

class Get extends Component {
  
  componentWillMount() {
    this.getData();
  }
  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open("GET", "/contact");
    // send the request
    xhr.send();
  }

  render() {
    return (
      <div>
        <Button>
        <a href="/contact"> To Contact Page </a>
        
        </Button>
      </div>
    );
  }
}
export default Get;