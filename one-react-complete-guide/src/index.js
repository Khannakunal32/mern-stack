// *****1  (1) then go to App.js  (the **** show the number to go and read from)  to read properly uncomment from **** line to the empty line

import ReactDOM from "react-dom";        // (2) imported an object named as ReactDom from the file
import "./index.css";                    // (3) need to put .css to tell its a css file also this is not applicable for normal javascript , only we can import these for react or es6+
import App from "./App";                 // (4) no need to put .js here "./"- means in the same folder 

ReactDOM.render(<App />, document.getElementById("root"));    // (5) Here ReactDOM is an object , that have a method name render which takes two parameter </app> that is a component in react and a 

// (6) here <App> is a component that we want to render in the place of document with the element with id 'root' , this root id is given in public index.html in <div id='root'>

