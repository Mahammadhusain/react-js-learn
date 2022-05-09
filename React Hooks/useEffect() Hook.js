    // ------------------------------------
    //         useEffect() hooks     
    // ------------------------------------
            // ====> useEffect() similar  to (componentDidMount, componentDidUpdate, componentWillUnmount) of class   
            // ====> useEffect() call after render() commited it to screen 
            // ====> useEffect() you can use many time as you want 
            // ====> using useEffect() you can do (set title of document),(data fetching), (caling API)   
            // ====> useEffect() run with first render and after every render update    
            // ====> useEffect() also run at unmouting of component    

            // ------------ Example of useEffect() -----------  
            // import React, { useEffect } from "react";
            // useEffect(Function) <---- way-1
            // useEffect(Function,Array) <---- way-2

import React, {useState,useEffect} from "react";

const Myfunc = ()=>{
    const [countup,setCountup] = useState(0)
    const [countdown,setCountdown] = useState(0)

    const handleincrese = () =>{
        setCountup(countup+1)
    }

    const handledecrese = () =>{
        setCountdown(countdown-1)
    }
    
    // This useEffect() call at every element (Case -1)
    // useEffect(()=>{
    //     console.log('use effect')
    // })

    // caling useEffect() only with countup (it is handled by [countup] Array) (Case -2)
    // useEffect(()=>{
    //     console.log('use effect')
    // },[countup])

    // caling useEffect() only with countdown (it is handled by [countdown] Array) (Case -3)
    useEffect(()=>{
        console.log('use effect')
    },[countdown])


    return(
        <React.Fragment>
            {/* // Countup By - 1 */}
            <h1>
                Count up : {countup}
            </h1>
                <button onClick={handleincrese} >Increse</button>

            {/* // Countdown By - 1 */}
            <h1>
                Count up : {countdown}
            </h1>
                <button onClick={handledecrese} >Increse</button>
        </React.Fragment>
    )
}

export default Myfunc