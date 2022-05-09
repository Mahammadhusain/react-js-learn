// ----------------------------------------------------------------------
    // Form in React
// ----------------------------------------------------------------------
    // ====> 1 - Controlled Component
    // ---------- Handle Multiple input ------------------
    import React, {useState} from "react";

    const Myapp = ()=>{
        // for text input
        const [inputvalue,setval] = useState('')
        // for Phone no
        const [textpno,setpno] = useState('')
        // for text Textarea
        const [textareavalue,setvaltxtarea] = useState('')

        const onchangeHandler=(e)=>{
            if (e.target.name === 'fname'){

                setval(e.target.value)
            }
            else if (e.target.name === 'pno'){

                setpno(e.target.value.substr(0,10))
            }
            else if (e.target.name === 'address'){

                setvaltxtarea(e.target.value)
            }
        }   
        

        return(
            <React.Fragment>
                <h2>Controlled Form in Form</h2>
                <input type='text' name="fname" value={inputvalue} onChange={onchangeHandler} /> <br/>
                <input type='number' name="pno" value={textpno} onChange={onchangeHandler} /> <br/>
                <textarea value={textareavalue} name="address" onChange={onchangeHandler} />

            </React.Fragment>
        )

    }

    export default Myapp

    // ---------- Handle Full Form With onSubmit() ------------------
    import React, {useState} from "react";

    const Myapp = ()=>{
        // for text input
        const [inputvalue,setval] = useState('')
        // for Phone no
        const [textpno,setpno] = useState('')
        // for text Textarea
        const [textareavalue,setvaltxtarea] = useState('')

        const onchangeHandler=(e)=>{
            if (e.target.name === 'fname'){

                setval(e.target.value)
            }
            else if (e.target.name === 'pno'){

                setpno(e.target.value.substr(0,10))
            }
            else if (e.target.name === 'address'){

                setvaltxtarea(e.target.value)
            }
        }   

        const onclickFormhandle = (e) => {
            e.preventDefault()
            console.log(e.target[0].value)
            console.log(e.target[1].value)
            console.log(e.target[2].value)
        }
        

        return(
            <React.Fragment>
                <h2>Controlled Form in Form</h2>
                <form onSubmit={onclickFormhandle}>

                    <input type='text' name="fname" value={inputvalue} onChange={onchangeHandler} /> <br/>
                    <input type='number' name="pno" value={textpno} onChange={onchangeHandler} /> <br/>
                    <textarea value={textareavalue} name="address" onChange={onchangeHandler} />
                    <button>Submit</button>
                </form>

            </React.Fragment>
        )

    }

    export default Myapp
    
// ---------------------------------------------------------------------------


    // ====> 2 - Uncontrolled Component (its behave just like HTML) 
    // ------ When use Uncontrolled Component ----------
        // ===> Manage (focus), (text selection), (media playback).
        // ===> Integarting with third-party DOM libraries.
        // ===> Triggering imperative (આદેશાત્મક) animations.

    // ------ use (React.Ref()) Using { CLASS BASED COMPONENT }
    // ------ autofocus using {FUNCTION BASED COMPONENT} ----------------
    import React, {useRef,useEffect } from "react";

    const Myapp = ()=>{
        
        const phone =useRef(null)
        console.log(phone.current)
        useEffect(()=>{
            phone.current.focus();
        },[])

        return(
            <React.Fragment>
                <h2>Controlled Form in Form</h2>
                <form >
                    <input type='text' name="fname" /> <br/>
                    <input type='number' name="pno" ref={phone} /> <br/>
                    <textarea name="address"  />
                    <button>Submit</button>
                </form>
            </React.Fragment>
        )
    }

    export default Myapp
