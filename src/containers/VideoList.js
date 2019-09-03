import React from 'react'
import { VideoItems } from "./VideoItems";
export const VideoList=(props)=>{
    console.log(props)
    return(<div>{
        props.video.map(
            (video)=>{
                return(<VideoItems title={video.snippet.title} thumbnails={video.snippet.thumbnails} onclick={props.onclick} video={video}/>)
            }
        )
    }</div>)
}