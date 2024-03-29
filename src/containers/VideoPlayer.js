import React,{useState,useEffect} from "react";
import '../App.css';
import { fetchChannelData } from "../apis/api.js";
import giphy from '../giphy.gif';
import { Avatar } from "@material-ui/core";
export const VideoPlayer=(props)=>{
    console.log(props)
    const [status,setStatus]=useState(false)

    const [channel,setChannel]=useState(giphy)

    useEffect(()=>{
        fetchChannelData(props.curr.snippet.channelId).then(
            (response)=>response.json()).then(
                (json)=>{
                    setChannel(json.items[0].snippet.thumbnails.high.url)
                }
        )
    })
    const vidSrc=`https://www.youtube.com/embed/${props.id}`
    return(
        <div className='video'>
            <iframe  width="740" height="400" src={vidSrc} frameBorder='0' allowFullScreen></iframe>    
            <div >
                <h2 >{props.curr.snippet.title}</h2>
                <p style={{display:'inline-flex',alignItems:'center',width:'200px',height:'10px'}}>
                    <Avatar src={`${channel}`} style={{width:'50px',height:'50px'}} />
                    <h4 style={{padding:'5%'}}>{props.curr.snippet.channelTitle}</h4>
                </p>
                <h4 onClick={()=>setStatus(!status)} style={{cursor:'pointer',fontWeight:'500'}}>Description</h4>
                {
                    status &&
                    <div>
                        <p style={{fontSize:'14px',fontWeight:'lighter',width:'800px'}}>{props.curr.snippet.description}</p>
                    </div>
                }
            </div>
        </div>
    )
}