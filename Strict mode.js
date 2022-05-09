// -------------------------------------------------------------------------
    // Strict Mode
// -------------------------------------------------------------------------
    // ===> Strict mode is used for highlighting potential problem in an application.
    // ===> Strict mode is only for developement mode.
    // ===> Strict mode is do not any impect at production build.
    // ===============================================================
        // were use strictmode
    // ===============================================================
    // Identifying components with unsafe lifecycles (identifying older lifecycles).
    // warning for older find DOMNode usage.  
    // warning for legacy string ref API usage.  
    // warning for legacy Context API.  
    // Detecting unexpected side effects.
    
    // ============= Example ========================
    import React from "react";
    import HocHandler from "./HOCCompo";

    function Mehul(props){
        // console.log(props)
        return(

        <React.StrictMode>
            <h1>Camp No - {props.camp}</h1>
            <h2>Gun Fired by Mehul = {props.bullet} </h2>
            <button onMouseOver={props.guntrigger} >Fire</button>
        </React.StrictMode>
        )

    }

    export default HocHandler(Mehul,20)
    


