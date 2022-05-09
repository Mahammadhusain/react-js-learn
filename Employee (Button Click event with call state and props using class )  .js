import React, { Component } from 'react'


class Employee extends Component{
    // create state with constructor
    constructor (props) {
        super(props)
        this.state = {
            name:'Mehul',
            roll:this.props.roll
        }

    
    }

    // State calling with Function
    // handleClick = () => {
    //     console.log('Hello',this.state.roll,this.state.name);
    // }

    // Change State using setState({name:'test'})
    handleClick = () => {
        this.setState({name:'Rohit'})
    }

    // Change State using setState (Normal Function)({name:'test'}function(state,props){})
    handleClick = () => {
        this.setState(function(state,props){
            console.log(state)
            console.log(props)
        })        
    }
    // Change State using setState (Arrow Function)({name:'test'}(state,props)=>{})
    // handleClick = () => {
    //     this.setState((state,props)=>{
    //         console.log(state)
    //         console.log(props)
    //     })        
    // }

    render(){

        return(
            <React.Fragment>
                <h1>Hello, {this.state.name}</h1>
                <button onClick = {this.handleClick} >Submit</button>
            </React.Fragment>
        )

        
    }
}

// --------------------------------------------------------------------------
// ReactDOM.render(<Employee roll= '101' />,document.getElementById('root'));
// --------------------------------------------------------------------------


export default Employee



// -----------------------------------------------------------------
//  Passing Arguments(Parameter) to Event using Arrow Function
// -----------------------------------------------------------------

import React,{ Component } from 'react'
// Function Component Handle Click Event
class Employee extends Component{
    // Created State
    state= {
        id:1,
        name:'Raj',
        roll:this.props.roll
    };
    
    // Arrow Function for Catch Parameter
    handleClick = (id,e) =>{
        console.log(id);
        console.log(e);
    }
    // Arrow Function For Button Event Handler
    handleClickArgs = (e) =>{
        this.handleClick(this.state.id,e);
    }

    // Rendring in HTML
    render(){
        return(
            <React.Fragment>
                <h1>Hello, {this.state.name}</h1>
                <button onClick = {this.handleClickArgs} >Submit</button>
            </React.Fragment>
        )
    }
    
    
}


// -----------------------------------------------------------------
//  Passing Arguments(Parameter) to Event using bind() Method
// -----------------------------------------------------------------

import React,{ Component } from 'react'
// Function Component Handle Click Event
class Employee extends Component{
    // Created State
    state= {
        id:1,
        name:'Raj',
        roll:this.props.roll
    };

    // Arrow Function for Catch Parameter
    // e = event
    handleClick = (id,nm,e) =>{
        console.log(id);
        console.log(nm);
        console.log(e);
    }
    // Rendring in HTML
    render(){
        return(
            <React.Fragment>
                <h1>Hello, {this.state.name}</h1>
                <button onClick = {this.handleClick.bind(this,this.state.id,this.state)} >Submit</button>
            </React.Fragment>
        )
    }


}


export default Employee
