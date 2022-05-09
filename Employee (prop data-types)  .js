// import React ,{Component} from "react"; <---------- For Class
// import React from "react"; <---------- For Function
import React from "react"; 
import PropTypes from "prop-types";

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
const Employee = (props) => {
        return (
            <React.Fragment>
            <h1>Hello {props.name}</h1>
            <h2>Roll {props.roll}</h2>
            </React.Fragment>
        )
    }

// Define Types of Props (Typechecking with PropTypes)
Employee.propTypes= {
    name:PropTypes.string
}
// Define Types of Props (Typechecking with PropTypes) (value is must be required)
Employee.propTypes= {
    name:PropTypes.string.isRequired
}
// Set Default Props
Employee.defaultProps= {
    name:'unknown'
}


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
// class Employee extends Component{
//     render(){
//         return <h1>Hello {this.props.name}, Age {this.props.age}</h1>
//     }
// }

export default Employee
