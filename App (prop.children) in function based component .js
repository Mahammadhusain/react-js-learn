import React from 'react'

const El1 = props => {
    return <h1>Hello world {props.children}</h1>
}

export default El1

// ----------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
import El1 from './App'

// You can write Javascript Expression between <El1>{100+3}</El1>
ReactDOM.render(<El1>test props.child</El1>,document.getElementById('root'))