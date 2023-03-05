import React, { useEffect, useState } from "react";
 import styles from './Stopwatch.module.scss';


const Stopwatch = ()=>{
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);
    const [mSecond, setMsecond] = useState(0);
    const [stop, setStop] = useState(true);

    const onStart = () =>{
        setStop(false);
        // setMsecond(mSecond + 1);
    }
    const onStop = () =>{
        setStop(true);
    }
    const onReset = () =>{
        setHour(0);
        setMin(0);
        setSecond(0);
        setMsecond(0);
    }

    useEffect(()=>{
        let interval = null;
        if(!stop){
            interval = setInterval(()=>{
                if(min > 59){
                    setHour(hour + 1);
                    setMin(0);
                    clearInterval(interval);
                }
                if(second > 59){
                    setMin(min + 1);
                    setSecond(0);
                    clearInterval(interval);
                }
                if(mSecond > 999){
                    setSecond(second + 1);
                    setMsecond(0);
                    clearInterval(interval);
                }
                if(mSecond <= 999){
                    setMsecond(mSecond + 1);
                }
            },10)
        }else{
            clearInterval(interval)
        } return ()=> {
            clearInterval(interval)
        }
    })

    return(
        <div style = {{textAlign:'center', marginTop:'100px',padding:'100px', backgroundColor:'black', color:'white'}}>
            <h1>{hour} : {min} : {second} : {mSecond}</h1>
            <button  className={styles.but} onClick={onStart}>Start</button>
            <button style = {{background:'green', margin:'5px', padding:'10px', border:'none', borderRadius:'5px', color:'white', fontSize:'22px',textTransform:'uppercase'}}   onClick={onStop}>Stop</button>
            <button style = {{background:'green', margin:'5px', padding:'10px', border:'none', borderRadius:'5px', color:'white', fontSize:'22px',textTransform:'uppercase'}}   onClick={onReset}>Reset</button>
        </div>

    )
}
export default Stopwatch;