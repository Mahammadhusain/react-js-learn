// ------------------------------------
//         Custom hooks     
// ------------------------------------
        // =====> custom hook javaScript is function
        // =====> custom hook share logic beetween two javaScript function
        // =====> custom hook start with prefix (use) keyword
        // =====> custom hook retun object so syntex of return is (return{}) not (return())


        // ------------ Example of useCustomhook() -----------

        // ----------- Creating Custom hook ----------------
        // import { useState } from "react";
        
        // const MyCustomhook = ()=>{
            //     // Set state
            //     const [count,setCount] = useState(0)
            //     // update State
            //     const handleIncrement = ()=>{
                //         setCount(count + 1);
                //     };
                
                //     // return state with object use (return{})
                //     return{
                    //         count,
                    //         handleIncrement
                    
                    //     }
                    
                    // }
                    
                    
                    // export default MyCustomhook


        // ----------- Use Custom hook ----------------
        // import React from 'react';
        // import MyCustomhook from './App';

        // const Employee = ()=>{
        // const mydata = MyCustomhook();
        // return(
        //     <React.Fragment>
        //         <h1>Count up: {mydata.count} </h1>
        //         <button onClick={mydata.handleIncrement} >Increment</button>
        //     </React.Fragment>
        // );

        // };

        // export default Employee