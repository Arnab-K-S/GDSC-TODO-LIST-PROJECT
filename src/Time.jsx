import React from "react";
import { useState, useEffect } from "react";

const Clock=()=>{

    const [time,setTime]=useState()
     useEffect(() => {
       setInterval(() => {
        const date = new Date();
        setTime(date.toLocaleString());
       },1000 );
     }, [])
  return (<h2>{time}</h2>)
}

export default Clock