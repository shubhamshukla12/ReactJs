import React, {Component} from 'react';
import  {Redirect} from 'react-router-dom';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:false
        };

        this.logOut =this.logOut.bind(this);
    }
    logOut(){
        localStorage.clear();
        this.setState({redirect:true});
    }
    render(){
        let {redirect}= this.state;
        if(redirect) return <Redirect to={"/login"}/>;
        return(
            <div>
                <h4>Dashboard</h4>
                <p>Congratulations! you are logged in..</p>
                <div className="row">
                    <button className="btn waves-effect waves-light" onClick={this.logOut} type="submit" name="action">Log out
                    </button>
                </div>
            </div>
        )
    }
}
export default Dashboard;