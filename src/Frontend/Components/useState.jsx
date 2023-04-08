    import React, { useState } from "react";
import { Outlet } from "react-router-dom";

    const UseTest = () => {

        const [state, setState] = useState();

        const onValChange=(event)=>{
            const newVal = event.target.value;
            setState(newVal);
        }
      return (
        <>
        <div>
        <input type="text"  placeholder="UsestateValues"  onChange={onValChange}/>
         <div>{state}</div>
        </div>
        </>
      )
    }
    
    export  default UseTest;