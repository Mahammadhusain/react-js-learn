// ----------------------------------------------------------------------
    // 1 - Inline Styling 
// ----------------------------------------------------------------------

    // Scope of Inline Style is only for current 
    // You can't aplly pesudo classes of css like (.hover, .active, .visited etc...)
    // ------------ Example-1 Using Simple Way ---------------------
    import React from "react";
    
    const Myapp = ()=>{
        
        // Css Properties
        const btnStyle1 = {
            padding:'10px',
            color:'red',    
        }
        
        return(
            <React.Fragment>
                <button style={btnStyle1}>Make Payment</button>
            </React.Fragment>
        )
        
    }
    
    export default 
    
    // ------------ Example-2 Using javaScript Spread Operator ---------------------
    import React from "react";

    const Myapp = ()=>{

        // Css Properties
        const btnStyle1 = {
            padding:'10px',
            color:'red',    
        }
        const btnStyle2 = {
            backgroundColor: 'coral',
            border:'1px coral'

        }
        
        return(
            <React.Fragment>
                <button style={{...btnStyle1, ...btnStyle2}}>Make Payment</button>
            </React.Fragment>
        )

    }

    export default 
    
    // ------------ Example-3 Using explicitly passed in javaScript Spread Operator ---------------------
    import React from "react";

    const Myapp = ()=>{

        // Css Properties
        const btnStyle1 = {
            padding:'10px',
            color:'red',    
        }
        
        return(
            <React.Fragment>
                <button style={{...btnStyle1, ...{backgroundColor: 'coral',border:'1px coral'}}}>Make Payment</button>
            </React.Fragment>
        )

    }

    export default Myapp


// ----------------------------------------------------------------------
    // 2 - External Styling 
// ----------------------------------------------------------------------
    // In External Css Should be className Unique
    // Because External Css Working Globally 

    // ------------ App.js -------------------
    import React from "react";
    import './App.css'

    const Myapp = ()=>{
        return(
            <React.Fragment>
                <button className='btnStyle'>Make Payment</button>
            </React.Fragment>
        )

    }

    export default Myapp

    // ------------ App.css -------------------
    /* Css Properties */

    .btnStyle {
        padding:10px;
        color:white; 
        background-color: black;  
    }


    // ------- Conditional Styling (External Css) -----------
    // ----------- App.js ---------------
    import React from "react";
    import './App.css'

    const Myapp = (props)=>{

        return(
            <React.Fragment>
                <button className={props.rang ? 'btnStyle1':'btnStyle2'}>Make Payment</button>
            </React.Fragment>
        )

    }

    export default Myapp

    // -------------- index.js -------------
    import React from "react";
    import ReactDOM from "react-dom";
    import Myapp from "./App";

    ReactDOM.render(<Myapp rang={false} />,document.getElementById('root'))

    // ---------- App.css ---------------
    /* Css Properties */

    .btnStyle1 {
        padding:10px;
        color:white; 
        background-color: black;  
    }

    .btnStyle2 {
        padding:10px;
        color:black; 
        background-color: brown;  
    }


    // ------- Multiple Class Apply for Style (External Css) -----------
    // ------------ App.js ------------------
    import React from "react";
    import './App.css'

    const Myapp = (props)=>{

        return(
            <React.Fragment>
                <button className='btnStyle1 btnStyle2'>Make Payment</button>
            </React.Fragment>
        )

    }

    export default Myapp
    
    
    // ------- Index.js ----------------
    import React from "react";
    import ReactDOM from "react-dom";
    import Myapp from "./App";

    ReactDOM.render(<Myapp rang={true} />,document.getElementById('root'))


    // ------- App.css ----------------
    /* Css Properties */

    .btnStyle1 {
        color:white; 
        background-color: black;  
    }

    .btnStyle2 {
        padding:10px;
        border-radius:  30px;
    }



// ----------------------------------------------------------------------
    // 3 - Styling with Css Module in React 
// ----------------------------------------------------------------------   
    // --------- App.module.css --------------
    .btnStyle {
        color:white; 
        background-color: black;  
    } 
    
    // --------- User.module.css --------------
    .btnStyle {
        padding:10px;
        border-radius:  30px;
    }

    // -------- App.js -----------------
    import React from "react";
    import Styles from './App.module.css'
    import Styles1 from './User.module.css'

    const Myapp = ()=>{

        return(
            <React.Fragment>
                <button className={Styles.btnStyle}>Make Payment</button>
                <button className={Styles1.btnStyle}>Make Payment</button>
            </React.Fragment>
        )

    }

    export default Myapp