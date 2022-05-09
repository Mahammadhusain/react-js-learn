import React from 'react'
// Function Component Handle Click Event
function Employee(props){

    // Using Normal Function
    function handleClick(){
        console.log('clicked',props.roll, props.name)
    }

    // Using Arrow Function
    const handleClick = () =>{
        console.log('clicked',props.roll, props.name)
    }


    return(
        <React.Fragment>
            <button onClick={handleClick}>Click me</button>
        </React.Fragment>
    )
}

//-----------------------------------------------------------------------
// ReactDOM.render(<Employee name='Rakesh' roll= '101' />,document.getElementById('root'));
//-----------------------------------------------------------------------


export default Employee