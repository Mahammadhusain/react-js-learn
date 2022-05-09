import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

function Mynavbar() {
  const isActive = false
  return (
    <>
      {/* Link not have Style Parameter */}
      {/* <ul>
      <li><Link to='/' >Home</Link> <br/></li>
      <li><Link to='/contact' >Contact</Link></li>
      <li><Link to='/service' >Service</Link></li>
      <li><Link to='/about' >About</Link></li>
      </ul> */}

      {/* NavLink have Style Parameter */}
      <ul>
          {/* <li><NavLink style={{fontSize:'100px'}} to="/">Home</NavLink></li> */}
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/">Home</NavLink></li>
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/contact">Contact</NavLink></li>
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/Service">Service</NavLink></li>
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/about">About</NavLink></li>
          
          {/* Product url render with initial with mobile category */}
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/products/mobile">Products</NavLink></li>
          {/* Product url render with initial with mobile category and its id */}
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/products/mobile/1">Products with ID</NavLink></li>

          {/* Login Condition based Url */}
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/login">Login</NavLink></li>
          <li><NavLink style={({isActive})=>{return{backgroundColor:isActive?'skyblue':''}}} to="/dashbord">Dashbord</NavLink></li>
          
          

      </ul>


    </>
  )
}

export default Mynavbar;
