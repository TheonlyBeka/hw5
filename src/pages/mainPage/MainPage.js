import React from "react";
import Users from "../../components/users/Users";
import App from "../../App";

class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: ""
        }
    }

    getUsers = () =>{
        this.setState({
            ...this.state,
            users: ["Beka", "Joma", "Timur"]
        })
    }

    changeInput = (e) =>{
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    submit = () => {
        this.setState({
            ...this.state,
            name: "",
            users: [...this.state.users, this.state.name]
        })
    }

    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <button onClick={this.getUsers}>get users</button>
                <div>
                    <input type="text" onChange={this.changeInput} value={this.state.name56 }/>
                    <button onClick={this.submit}>add user</button>
                </div>
                <Users users={this.state.users}/>
            </div>
        );
    }

}

export default MainPage;