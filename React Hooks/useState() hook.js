// -------------------------------------------
//             HOOKS IN REACT
// -------------------------------------------

    // ------------------------------------
    //         What is hooks     
    // ------------------------------------
       //====> hooks are functions
       //====> hooks are provide use of (state & life cycle features) in function based components without using class based component
       

    // ------------------------------------
    //         Rules of hooks     
    // ------------------------------------
            // ====> Hooks call at top level
            // ====> Hooks call only in (react Functions based componants) and (custom hooks)
            // ====> Don't call hooks in any (loop),(if-else) or (nested functions)
            // ====> Hooks Don't work in (Class)

    // ------------------------------------
    //         useState() hooks     
    // ------------------------------------
            // ====> This is use for Declairng State
            // ====> This is return 2 thinks (1-current state value), (2- function <this is use for update value of current state> )
            // ====> You can also call in Event Handler

            // ------------ Example of useState() -----------
            // import React, { useState } from "react";

            // const Myfunc = () =>{
            //     // useState() is return Array
            //     const name = useState('Rahul') 
            //     // javascript array de-structuring  (best-way)
            //     // const [name,setName] = useState('Rahul') 
            //     const roll = useState(102) 
            //     // javascript array de-structuring  (best-way)
            //     // const [roll,setRoll] = useState(111) 

            //     const handleClick = () =>{
            //         // change Name onClick
            //         name[1]('Mehul')
            //         // change roll onClick
            //         roll[1](111)
            //     }

            //     return (
            //         <React.Fragment>
            //             <h1>Name is = {name[0]} and Roll is = {roll[0]} </h1>
            //             <button type="button" onClick={handleClick} >Change name</button>
            //         </React.Fragment>
            //     )
            // }

            // export default Myfunc;
    

