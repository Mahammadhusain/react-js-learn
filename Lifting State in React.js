// -------------------------------------------------------------------
    // Lifting State
// -------------------------------------------------------------------
    // ===> Lifting State used at when You want to pass one component's (state) as (props) in another component 

    // ---------------- Example -------------------
    // -------- App.js  ----------------
    import React,{useState}  from "react";
    import Guest from "./Guest";

    const Myapp = ()=>{
        
        const [myappstate,setmyappstate] = useState('Rahul') 

        const handleincrese = () =>{
            setmyappstate('raj')
        }

        return(
            <React.Fragment>
                <Guest name={myappstate}/>
                <h1>{myappstate} </h1>
                <button onClick={handleincrese} >submit</button>
            </React.Fragment>
        )
    }
    export default Myapp

    // -------- Guest.js (use state of App as props in In Guest.js) ----------------
    import React from 'react';

    // LoggedOut in User Component
    const Guest = (props)=>{

    return(
        <React.Fragment>
        <h3>Welcome {props.name}</h3>
        </React.Fragment>
    )

    };

    export default Guest
    
    // -------- Index.js  ----------------
    import React from "react";
    import ReactDOM from "react-dom";
    import Myapp from "./App";

    ReactDOM.render(<Myapp />,document.getElementById('root'))
