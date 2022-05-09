// ========================================================= 
        // Key in React
// ========================================================= 
        // Key is not passed as props for any JSX Element
        // Key Passed when You use map() function
        // Key Must be unique for every elements
        // ---------- Example ----------------
        import React from "react";

        const ListMaping = (props)=>{
            
            const listOfItem = props.mylist

            return(
                <ul>
                    {listOfItem.map((item)=>{return (<li key={item}>{item}</li>)})}
                </ul>
            )

        }

        export default ListMaping




