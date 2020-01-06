import React from "react"
import Axios from "axios"
import DarkMode from "./DarkMode"
 class Players extends React.Component{
    state = {
players:[]
    }
    componentDidMount(){
Axios.get("http://localhost:5000/api/players")
.then(res=> this.setState({players:res.data}))
.catch(err => console.log(err))
    }
    render(){
        console.log(this.state.players)
       if (this.state.players.length == 0){
           console.log("loading")
       }
       return (
        
           <div>
               <DarkMode />
               {this.state.players.map(i => <p key={i.id}>{i.name} from {i.country}</p>)}
       </div>)
    }

}
export default Players 