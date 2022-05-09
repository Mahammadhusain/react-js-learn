import { useLocation } from 'react-router-dom';
const Login = (props) => {


    // Message from <App/> to <Login/>
    let usrmsg = useLocation()
    // console.log(usrmsg);

    // Message Generate hoga tabhi hi niche wala block chalega 
    if(usrmsg.state !== null){
        return(
        <p>{usrmsg.state.msg}</p>
        )

    }

    return(
    <>
        <h1>Welcome to Login Page</h1>
    </>
    )

    
}
   


export default Login