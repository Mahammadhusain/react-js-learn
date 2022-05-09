// ----------------------------------------------------
//  Conditional Rendring In React
// ----------------------------------------------------
        // ====> In React Conditional Rendring beahve like javascript conditions
        // ====> If-else don't work in JSX
        // ====> JSX is just function call  
        

        // ---------------- EXAMPLE - 1 -----------------
            // --------- Index.js ----------------
        //     import React from 'react';
        //     import ReactDOM from 'react-dom';
        //     import Pm from './App';
            
        //     ReactDOM.render(<Pm name={true} />,document.getElementById('root'));

        //     // --------- User.js ----------------
        //     import React from 'react';
        //     const User = ()=>{
        //         return(
        //             <React.Fragment>
        //             <h3>Prime Member</h3>
        //         </React.Fragment>
        //     );
            
        // };
        
        // export default User

        // // --------- App.js ----------------
        // import React from 'react';
        // import User from './User'

        // const Pm = (props)=>{
        //     const primemember = props.name
            
        // return(
        //     <React.Fragment>
        //         <h1>Welcome User</h1>
        //         {/* checke if user is prime == True then show else not show in Html */}
        //         {primemember && <User/>}
        //     </React.Fragment>
        // );

        // };

        // export default 
        
// ----------------------------------------------------------------------------------------------- 
        // ------- EXAMPLE - 2 (Button Clicked (login/logout) using useState Hooks) -------------
        // ------ GuestUser.js ----------
        import React from 'react';
        
        // LoggedOut in User Componanet
        const Guest = (props)=>{
            
            return(
                <React.Fragment>
            <h3>Welcome Guest</h3>
            <button onClick={props.clickData}>Login</button>
            <button>Signup</button>
            </React.Fragment>
            )
            
        };
        
        export default Guest

    
        // ---------- LoggedInUser.js ----------
        import React from 'react';
        
        // Loggedin User Componanet
        const User = (props)=>{
            return(
                <React.Fragment>
                <h3>Welcome Rahul</h3>
                <button onClick={props.clickData} >Logout</button>
            </React.Fragment>
            );
        
        };

        export default User
        
        // ------ App.js (loggedIn/loggedOut)  based Rendring----------
        import React, {useState} from 'react';
        import Guest from './Guest';
        import User from './User';


        // ----------- LoggedIn/LoggedOut Based Rendring ----------------
        const Pm = (props) => {

            // Create State with Props of App using {useState} hook
            const [is_loggedin,setlogin] = useState(props.login)

            // Login Event Handler
            const handleLogin = ()=>{
                setlogin(true)
            }
            // Logout Event Handler
            const handleLogout = ()=>{
                setlogin(false)
            }
            
            // (Login/Logout) based rendering
            if (is_loggedin){
            return(
                <React.Fragment>
                    <User clickData={handleLogout} />
                </React.Fragment>
            );
            }else {
                return(
                <React.Fragment>
                    <Guest clickData={handleLogin} />
                </React.Fragment>
                )
            }
        };

        export default Pm







        {(()=>{})()}







