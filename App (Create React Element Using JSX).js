import React, { Component } from 'react';

// Create Class Based React element using JSX
class App extends Component {
    render() {
        // return React.createElement('h1',null,'hello')
        return (
            // --------------------------------------------------------------------------- 
            // render multiple elements using <div></div>
            // --------------------------------------------------------------------------- 
            // <div> 
            //     <h1>Hello</h1>
            //     <h2>World</h2>
            // </div>

            // --------------------------------------------------------------------------- 
            // render multiple elements using <React.Fragment></React.Fragment> no extra div
            // --------------------------------------------------------------------------- 
            <React.Fragment> 
                <h1>Hello</h1>
                <h2>World</h2>
            </React.Fragment>
            
            
            
            // --------------------------------------------------------------------------- 
            // render multiple elements using <Fragment></Fragment> need to import 
            // --------------------------------------------------------------------------- 
            // import React, { Component,Fragment } from 'react';
            // <Fragment> 
            //     <h1>Hello</h1>
            //     <h2>World</h2>
            // <Fragment>
            
            
            // --------------------------------------------------------------------------- 
            // render multiple elements using <></> shorthand of <React.Fragment> </React.Fragment> 
            // --------------------------------------------------------------------------- 
            // <> 
            //     <h1>Hello</h1>
            //     <h2>World</h2>
            // </>
        );
    }

}

export default App;