import React from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Home from "./Navbar/Home";
import Mynavbar from "./Navbar/Mynavbar";
import Service from "./Navbar/Service";
import PageNotfound from "./Navbar/PageNotfound";
import Products from "./Navbar/Products";
import Dashboard from "./Navbar/Dashboard" ;
import Login from "./Navbar/Login";
import Logout from "./Navbar/Logout";

const App = ()=>{

    // User (Loggedin or Not) Condition
    let isLoggedin = true
    // Create State for <Navigate state={} />
    const Usermsg = {
        'msg':'User not Authenticated'
    }

    return(
        <>
        <Mynavbar/>
        <Routes>
            {/* Normal url router */}
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/service' element={<Service/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            {/* 404 Page not found */}
            <Route exact path='*' element={<PageNotfound/>}></Route>
            {/* Dynamic Url with category */}
            <Route exact path='/products/:category' element={<Products/>}></Route>
            {/* Dynamic Url with category and its id */}
            <Route exact path='/products/:category/:id' element={<Products/>}></Route>

            {/* Login Conditon based rendring component */}
            <Route exact path='/login' element={<Login/>}></Route>
            {/* Redirect on dashboard if isLoggedin = True */}
            <Route exact path='/dashbord' element={isLoggedin?<Dashboard/>:
                // Navigate provide props which you send in Login Componenet
                <Navigate to='/login' replace state ={Usermsg} />}>
            </Route>

            {/* Logout */}
            <Route exact path='/logout' element={<Logout/>}></Route>

        </Routes>
        </>
    )
}

export default App