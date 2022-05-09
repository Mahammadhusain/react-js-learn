import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Employee from './Employee'

ReactDOM.render(<App />,document.getElementById("root"));

// ---------- Without PROPS ------------
// ReactDOM.render(<Employee />,document.getElementById("root"));

// ---------- With PROPS (prps use in Employee.js)------------
ReactDOM.render(<Employee name="Mehul" age='30' />,document.getElementById("root"));