// --------------------------------------------------------
//  List in React
// --------------------------------------------------------
        // ----> You can pass list of HTML Elements in JSX using curly braces {}
        // ----> You can use map for iterating list 
            // Syntex:- map(callback(curruntValue,index,Array),thisArg)
            // Example:- map((num,index) =>{return num})


        // ------------ EXAMPLE --------------------------
        // ------ App.js ---------
        import React from "react";

        const ListMaping = ()=>{
            const mylist = ['Apple','Kiwi','Banana','Orange']

            // const allItems = mylist.map((w,p,mylist)=>{      ==========> way-1
            //     return <li>Index-{p},Number-{w},{mylist}</li>
            // })

            // return(
            //     <React.Fragment>
            //         {allItems}
            //     </React.Fragment>
            // )

            // ==========> way-2
            return(                                                 
                <ul>
                    {mylist.map((item)=>{return (<li>{item}</li>)})}
                </ul>
            )

        }

        export default ListMaping

        
        // ------ index.js ---------
        ReactDOM.render(<ListMaping  />,document.getElementById('root'));

