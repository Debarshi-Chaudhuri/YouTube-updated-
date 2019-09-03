import React,{Component} from 'react';
import { Route,Switch,withRouter } from "react-router-dom";
import { search,onclick,auto } from "../actions/action";
import { connect } from "react-redux";
import Home from "./Home.js";
import { Searchbar } from "./Searchbar.js";
import { bindActionCreators } from "redux";
import { fetchHomeData } from "../apis/api.js";
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        search,onclick,auto
    },dispatch)
}
const mapStateToProps=(store)=>{
    return({
        video:store.video,
        status:store.status,
        curr:store.curr,
        id:store.id
    })
}
class App extends Component{
    constructor(props){
        super(props);
    }
    searching=(data)=>{
        this.props.history.push(`/${data}`);
        this.props.search(data);
    }
    componentDidMount(){
        fetchHomeData().then(
            (response)=>response.json()
        ).then(
            (json)=>{
                console.log(json)
                this.props.auto(json.items)
            }
        )
    }
    render(){
        window.scrollTo(0,0)
        return(
            <div>
                <Searchbar search={this.searching} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:id' component={Home} />
                </Switch>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));