import { useNavigate } from "react-router-dom";

const Dashbord = () => {
    // using <useNavigate> hook we can send message in another page (<Login/>)
    let mynavigate = useNavigate()
    let mydata = {
        msg:'Logged out Succcess'
    }
    return(
        <>
            <h1>Welcome to Dashboard</h1>
            <button onClick={()=>{mynavigate('/logout',{state:mydata},)}} >Logout</button>
            {/* Also Can Use this ===>>> mynavigate(1),mynavigate(-1),mynavigate(2) navigate page updown */}
        </>
    )
}
export default Dashbord