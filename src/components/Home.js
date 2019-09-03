import React,{ Component } from "react";
import { auto,onclick } from "../actions/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { VideoList } from "../containers/VideoList";
import { VideoPlayer } from "../containers/VideoPlayer";
const mapStateToProps=(store)=>{
    return({
        video:store.video,
        status:store.status,
        curr:store.curr,
        id:store.id
    })
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick,auto
    },dispatch)
}
class Home extends Component{
    click=(video)=>{
        if(typeof(video.id)!=='string')
        this.props.history.push(`/${video.id.videoId}`);
        else
        this.props.history.push(`/${video.id}`);
        this.props.onclick(video);
    }
    render(){
        window.scrollTo(0,0);
        return(
        <div style={{display:'flex'}}>
            {this.props.status && 
                <VideoPlayer {...this.props} />
            }
            <VideoList {...this.props} onclick={this.click} />
        </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);