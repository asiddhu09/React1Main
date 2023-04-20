import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

import App from './App';


//Method 1

// ReactDOM.render(
//  <h1>Hello World</h1>,
//  document.getElementById("root")
// )


//Method 2

createRoot(document.getElementById("root")).render(
<>
<h1>Question 1 : Date and Time</h1>
<App/>
</>

)