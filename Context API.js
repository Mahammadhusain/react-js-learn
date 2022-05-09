// ---------------------------------------------------------
    // Context API
// ---------------------------------------------------------
// Context API is send State form one module to another using(Provider,Consumer)
// ----------- App.js -------------
    import React, {useState} from "react"
    import Guest from "./Guest"

    // Create Context Using Context API
    export const MyContext = React.createContext()
    // Function Based Component
    function App(){

        // Create State
        const [appstate,setAppState] = useState('hi')
        const [appstate1,setAppState1] = useState('hi1')

        // Button Click Change Value
        const setStateForapp = () =>{
            setAppState('wwww')
            setAppState1('ssss')
        } 
        
        return(

            <React.Fragment>
                <h2>Hello App State = {appstate},{appstate1}</h2>
                <button onClick={setStateForapp}>Ok</button>
                
                {/* Create Context Provider for Guest  */}
                <MyContext.Provider value={{appstate,appstate1}}>
                    <Guest/>
                </MyContext.Provider>

            </React.Fragment>
        )
    }   

    export default App

// ----------- Guest.js -------------
    import React from "react"
    import { MyContext } from "./App"

    function Guest(){
        return(

            <React.Fragment>
                <h2>Hello Guest</h2>

                {/* Create Consumer For Guest (Guest Recived State Value from App) */}
                <MyContext.Consumer>
                    {/* Arrow Function which is return data  */}
                    {data =>(
                        <h4>{data.appstate},{data.appstate1}</h4>
                    )}
                </MyContext.Consumer>

            </React.Fragment>
        )
    }   

    export default Guest

// ----------- Index.js ----------------
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(<App />,document.getElementById("root"));

// ----------- Cotext.js (Using Separate Context.js file) ----------------
    import React from 'react';
    // Create Context Using Context API (here Mehul is Default value if Provider Not Available Then By Default Called Mehul By Consumer)
    // You can Set Deault Value any data type like(int,string,Array,object,bool,null etc...)
    const MyContext = React.createContext('Mehul')
    // Create Context Using Context API Without Set Default value
    const MyContext = React.createContext()
    // Create Provider for Sending data
    export const Provider = MyContext.Provider
        <Provider>
            <User />
        </Provider>
    // Create Consumer for Reciving data
    export const Consumer = MyContext.Consumer
        <Provider>
            {data =>(<h4>{data.appstate},{data.appstate1}</h4>)}
        </Provider>


// ----------------------------------------------------------------------------------------

// -----------------------------------------------------------
    // Context Type (useContext) Hook 
// -----------------------------------------------------------
    // When You Use contextType then no need to make Consumer for state data reciving
    // -------------- Guest.js -------------
    import React, {useContext} from "react"
    import { MyContext } from "./App"

    function Guest(){
        // Use {useContext} Hook instead of using <Provider></Provider>  ---- Way-1
        // const useMycontext = useContext(MyContext);
        // Using object Destructuring ---- Way-2
        const {appstate,appstate1} = useContext(MyContext);
        
        return(
            <React.Fragment>
                <h2>Hello Guest</h2>
                <p>Context First Value is = {appstate}</p>
                <p>Context Second Value is = {appstate1}</p>
            </React.Fragment>
        )
    }   

    export default Guest