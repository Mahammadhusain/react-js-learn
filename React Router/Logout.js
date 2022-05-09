import { useLocation } from "react-router-dom";

const Logout = () => {

    // Message from <Dashboard/> to <Logout/>
    let logoutmsg = useLocation()
    // console.log(logoutmsg);
    
    // Message Generate hoga tabhi hi niche wala block chalega 
    if(logoutmsg.state !== null){
        return(
        <>
            <p>{logoutmsg.state.msg}</p>
        </>)
    }
        
    return(
        <>
            <h1>Welcome to Logout Page</h1>
        </>
    )
}

export default Logout