import React ,{Component} from "react";

// -----------------------------------------
// Normal Function Based Component
// -----------------------------------------
// function Employee() {
//     return <h1>Hello Rahul</h1>
// }

// -----------------------------------------
// Normal Function Based Component With PROPS
// -----------------------------------------
// function Employee() {
//     return <h1>Hello Rahul</h1>
// }

// -----------------------------------------
// Arrow Function Based Component
// -----------------------------------------
// const Employee = () => {
//     return <h1>Hello Mehul</h1>
// }

// -----------------------------------------
// With PROPS Arrow Function Based Component
// -----------------------------------------
// const Employee = (props) => {
    //     return <h1>Hello {props.name}</h1>
    // }
    
// -----------------------------------------
// Class Based Component Without PROPS
// -----------------------------------------
// class Employee extends Component{
//     render(){
//         return <h1>Hello Rahul</h1>
//     }
// }

// -----------------------------------------
// Class Based Component With PROPS
// -----------------------------------------
class Employee extends Component{
    render(){
        return <h1>Hello {this.props.name}, Age {this.props.age}</h1>
    }
}

export default Employee
