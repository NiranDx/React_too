import React,{Component} from 'react';
import axios from 'axios';
class Github extends Component {

    state = { user: 'NiranDx', data:''}
 
    componentDidMount = () => this.fetchUser(this.state.user)
 
    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                this.setState({data: response.data})
                console.log(response.data)
            })
    }
 
    render() {
        const {data} = this.state
        if (data)
            return ( <div>{data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="50px"/> </div> )
        return (<div>.</div>);
    }
 }
 
 export default Github