import React, { Component } from 'react'
// Only used in Class Based Component (State)
// You can Make State in Class 
//   1- Directly in in Class
//   2- in Constructor 


// Values Pass in State directly
// class Employee extends Component{
//     // This State only Use with Employee class
//     state = {
//         name:'Raj',
//         roll:101,
//     }

//     render(){
//         return (
//             <React.Fragment>
//                 <h1>Hello,{this.state.name}</h1>
//                 <h3>Your Roll is - {this.state.roll}</h3>
//             </React.Fragment>
//         ) 
//     }
// }
// -----------------------------------------------------------------
// ReactDOM.render(<Employee />,document.getElementById('root'))
// -----------------------------------------------------------------


// Props Pass via State
// class Employee extends Component{
//     // This State only Use with Employee class
//     state = {
//         name:'Raj',
//         roll:this.props.roll,
//     }

//     render(){
//         return (
//             <React.Fragment>
//                 <h1>Hello,{this.state.name}</h1>
//                 <h3>Your Roll is - {this.state.roll}</h3>
//             </React.Fragment>
//         ) 
//     }
// }
// -----------------------------------------------------------------
// ReactDOM.render(<Employee roll = '101' />,document.getElementById('root'))
// -----------------------------------------------------------------

// State Pass with Constructor
class Employee extends Component {
    // This State only Use with Employee class
    constructor(props) {
        // Must be props called with super()
        super(props)
        this.state = {
            name: 'Raj',
            roll: this.props.roll,
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello,{this.state.name}</h1>
                <h3>Your Roll is - {this.state.roll}</h3>
            </React.Fragment>
        )
    }
}


// -----------------------------------------------------------------
// ReactDOM.render(<Employee roll = '101' />,document.getElementById('root'))
//


export default Employee