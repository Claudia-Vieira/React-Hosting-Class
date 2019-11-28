import React from "react";
import axios from "axios";

export default function Weather (props) {
    
    function getData (response) {
        alert(`Hello from ${response.data.name}! It's ${response.data.main.temp}ºC!`)
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=011674ac65e3e0ef6d73be0d4fdbae64&units=metric`;
    axios.get(apiUrl).then(getData);

    return (
        <h3>Will this work?</h3>
    )
    
};