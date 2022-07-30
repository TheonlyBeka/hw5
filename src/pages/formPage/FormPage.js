import React from "react";
import classes from '../../App.css';

class FormPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: {
                name: "",
                surname: "",
                gender: "",
                status:""

            }
        }
    }

    changeInput = (e) => {
        console.log(e.target.name)
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = ()=>{
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={this.changeInput}
                />
                <input
                    type="text"
                    placeholder="surname"
                    name="surname"
                    onChange={this.changeInput}
                />
                <input
                    type="radio"
                    name="status"
                    value="В браке"
                    onChange={this.changeInput}
                />
                <select name="gender" onChange={this.changeInput}>
                    <option>Man</option>
                    <option>Woman</option>
                </select>
                <button onClick={this.onSubmit}>post</button>
            </div>
        );
    }
}

export default FormPage;