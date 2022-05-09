// ------------------------------------------------------------------------------
        // Bootstrap in React (Two Way to Use it)
// ------------------------------------------------------------------------------
    // 1 ====> With CDN Link
    // 2 ====> install Modeule

// ---------- EXAMPLE -----------------------
// npm install bootstrap@5.1.0
import React from "react";
import pic from './1.jpg'
import  "../node_modules/bootstrap/dist/css/bootstrap.css";

const Myapp = ()=>{

    return(
        <React.Fragment>
            <img className="img-thumbnail " src={pic} alt="" />
        </React.Fragment>
    )

}

export default Myapp