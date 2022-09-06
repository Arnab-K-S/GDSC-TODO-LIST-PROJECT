import React from "react";
import { useState, useEffect } from "react";
import './button.css'
const Lists=(props)=>{
    const task=props.task
    const dates=props.date
    const times=props.time
    const [time, setTime] = useState()
    useEffect(() => {
        setInterval(() => {
            const curdates = new Date();
            setTime(curdates.getTime());
        }, 1000);
    }, [])
    
    const day=new Date(dates+"T"+times)
    const rem = new Date(day.getTime()-time)
    const remd = parseInt(rem / (1000 * 60 * 60 * 24))
    const remh = parseInt(rem / (1000 * 60 * 60) - remd * (24))
    const remm = parseInt(rem / (1000 * 60 ) - remh * (60))
    const checkprior=()=>(remd<1)?"red":"normal";
    return(
        <>
        <li className={checkprior()}>
                <div className="body">{task} </div>
                    <div className="datetag">{dates} {times}</div>
                <div className="remaining"> Remaining: {remd + " days " + remh + " hours " + remm + " minutes" }</div>
        
        </li>
        </>
    )

}

export default Lists