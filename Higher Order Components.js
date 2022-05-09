// -----------------------------------------------------
    // Higher Order Components (a technique for re-use componenets)
// -----------------------------------------------------
// ===> HOC is function which is take Component and return new component
// ===> Use of HOC (when reapeted same type component logic then)
// ------------ HOCCompo.js ------------------------
    import {useState} from "react";
    // HOC Handler which is javaScript Arrow function
    const HocHandler = (Person)=>{
        // Created Component use for same logic which implement some other component 
        function HocGun(){
            // state for count fire
            const [mystate,setState] = useState(0)
            // function for trigger fire
            const fireNow = ()=>{
                setState(mystate+1)
            }

            return(
                // called Component which return by HocHandler
                <Person bullet = {mystate} guntrigger={fireNow} />
            )
        }

        return(
            // HocHandler return HocGun component
            HocGun
        )
    }
    export default HocHandler


// ------------ Rahul.js ------------------------
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Rahul(props){
        // console.log(props)
        return(
            <React.Fragment>
                <h2>Gun Fired by Rahul = {props.bullet} </h2>
                <button onMouseOver={props.guntrigger} >Fire</button>
            </React.Fragment>
        )
    }
    export default HocHandler(Rahul);


// ------------ Mehul.js ------------------------
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Mehul(props){
        // console.log(props)
        return(

        <React.Fragment>
            <h2>Gun Fired by Mehul = {props.bullet} </h2>
            <button onMouseOver={props.guntrigger} >Fire</button>
        </React.Fragment>
        )

    }
    export default HocHandler(Mehul)


// ------------ App.js ------------------------
    import React from "react";
    import Rahul from './Rahul'
    import Mehul from './Mehul'

    function App(){
        return(
            <React.Fragment>
                <Rahul/>
                <Mehul/>
            </React.Fragment>
        )
    }
    export default App


// ----------------- HOC with additional parameter -------------
// ------------ HOCCompo.js ------------------------
    import {useState} from "react";
    // HOC Handler which is javaScript Arrow function
    const HocHandler = (Person,shot)=>{
        // Created Component use for same logic which implement some other component 
        function HocGun(){
            // state for count fire
            const [mystate,setState] = useState(0)
            // function for trigger fire
            const fireNow = ()=>{
                setState(mystate+shot)
            }

            return(
                // called Component which return by HocHandler
                <Person bullet = {mystate} guntrigger={fireNow} />
            )
        }

        return(
            // HocHandler return HocGun component
            HocGun
        )
    }
    export default HocHandler


// ------------ Rahul.js ------------------------
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Rahul(props){
        // console.log(props)
        return(
            <React.Fragment>
                <h2>Gun Fired by Rahul = {props.bullet} </h2>
                <button onMouseOver={props.guntrigger} >Fire</button>
            </React.Fragment>
        )
    }
    export default HocHandler(Rahul,10);


// ------------ Mehul.js ------------------------
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Mehul(props){
        // console.log(props)
        return(

        <React.Fragment>
            <h2>Gun Fired by Mehul = {props.bullet} </h2>
            <button onMouseOver={props.guntrigger} >Fire</button>
        </React.Fragment>
        )

    }
    export default HocHandler(Mehul,20)


// ------------ App.js ------------------------
    import React from "react";
    import Rahul from './Rahul'
    import Mehul from './Mehul'

    function App(){
        return(
            <React.Fragment>
                <Rahul />
                <Mehul />
            </React.Fragment>
        )
    }
    export default App






// ----------------- When Passed Props with App.js in <Rahul camp='101' /> &  <Mehul camp='102' /> -------------
// NOTE:- above two props accessed with (HOCCompo.js) not with (Rahul.js),(Mehul.js)
// ------------ HOCCompo.js ------------------------
    import {useState} from "react";
    // HOC Handler which is javaScript Arrow function
    const HocHandler = (Person,shot)=>{
        // Created Component use for same logic which implement some other component 
        function HocGun(props){
            // state for count fire
            const [mystate,setState] = useState(0)
            // function for trigger fire
            const fireNow = ()=>{
                setState(mystate+shot)
            }
            // console.log(props.camp) <=== For Rahul camp = '101', For Mehul camp= '101' 
            return(
                // called Component which return by HocHandler
                <Person camp={props.camp} bullet = {mystate} guntrigger={fireNow} />
            )
        }


        return(
            // HocHandler return HocGun component
            HocGun
        )
    }
    export default HocHandler

// ------------ Rahul.js ------------------------
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Rahul(props){
        // console.log(props)
        return(
            <React.Fragment>
                <h2>Gun Fired by Rahul = {props.bullet} </h2>
                <button onMouseOver={props.guntrigger} >Fire</button>
            </React.Fragment>
        )
    }
    export default HocHandler(Rahul,10);


// ------------ Mehul.js ------------------------
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Mehul(props){
        // console.log(props)
        return(

        <React.Fragment>
            <h2>Gun Fired by Mehul = {props.bullet} </h2>
            <button onMouseOver={props.guntrigger} >Fire</button>
        </React.Fragment>
        )

    }
    export default HocHandler(Mehul,20)


// ------------ App.js ------------------------
    import React from "react";
    import Rahul from './Rahul'
    import Mehul from './Mehul'

    function App(){
        return(
            <React.Fragment>
                <Rahul camp='101' />
                <Mehul camp='102' />
            </React.Fragment>
        )
    }
    export default App