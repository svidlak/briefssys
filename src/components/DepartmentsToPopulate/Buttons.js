import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Buttons extends Component {
    state =  {
        selectedOption: '',
        userList: this.props.usersList,
        selectedUsers: [],
    }
    handleChange = (selectedOption) => {
        this.setState({selectedUsers: selectedOption})
    }
    componentDidMount = () =>{
        let newUsersArr = [];
        for(var x in this.state.userList){
            newUsersArr.push({
                value: this.state.userList[x].id,
                label: this.state.userList[x].name
            })
        }
        this.setState({userList: newUsersArr})
    }
    render(){
        return (
            <div>
                    <Select
                        name="form-field-name"
                        value={this.state.selectedUsers}
                        placeholder="אנא בחרו משתמשים"
                        onChange={this.handleChange}
                        multi={true}
                        options={this.state.userList}
                        joinValues={true}
                        // removeSelected={false}
                    />
                <input type="button" value="אשר את הבריף" onClick={()=>this.props.acceptBriefHandler(this.state.selectedUsers)} /><br/><br/>
                <input type="button" value="החזר לשולח עם הערה" onClick={this.sendBackHandler} /><br/><br/>
            </div>
        )
    }
}

export default Buttons;
