import React,{useState,useEffect} from "react";
import '../App.css';
export const VideoPlayer=(props)=>{
    const vidSrc=`https://www.youtube.com/embed/${props.id}`
    return(
        <div className='video'>
            <iframe  width="740" height="400" src={vidSrc} frameBorder='0' allowFullScreen></iframe>    

        </div>
    )
}