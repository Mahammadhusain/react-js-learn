// ------------------------------------------------------------------
    // Images In React
// ------------------------------------------------------------------
        // ======> Inside src Folder
        // ======> Inside Public Folder


        // --------- Some Note-----------
            // when you put any file in public folder then webpack can't processed at built-time
            // just make copied whithout touched it.
            // when you put static file like(js,css) in public folder then webpack do not minified it.
            // not get message for file missing at compilation time
            //  don't do hsahinf of files name at compaition time
        // ---------- When use public folder ---------------
            // when you want file name with specific file name. 
            // you have thoused of images and dinamically reference their path like (e-commmerce project).
            // some library may be incompatible with webpack and you noth have other option but include it's as a <script> tags

        // -------------- Syntex for Public files Access with Public Folder ----------------------
        // ----- For Access image in (index.html)----------------------
        // <img src="%PUBLIC_URL%/pic.jpg" alt="mypic" />
        // <img src="%PUBLIC_URL%/images/pic.jpg" alt="mypic" />
        
        // ----- For Access image in (App.js) any javaScript file ----------------------
        // <img src={process.env.PUBLIC_URL+"/pic.jpg"} alt="mypic />
        // <img src={process.env.PUBLIC_URL+"/image/pic.jpg"} alt="mypic />
        
        // -------------- Syntex for Access Static files with src Folder ----------------------
        // ------------ App.js ---------------
        import React from "react";
        import pic from './1.jpg'

        const Myapp = ()=>{

            return(
                <React.Fragment>
                    <img src={pic} alt="" />
                </React.Fragment>
            )

        }

        export default Myapp
