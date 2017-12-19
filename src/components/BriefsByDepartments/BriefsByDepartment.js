import React, { Component } from 'react';
import axios from 'axios';

import OutgoingBriefsList from '../OutgoingBriefs/OutgoingBriefsList'

class BriefsByDepartment extends Component {
    state = {
        departments: [],
        selectedDepartment: 0,
        briefs: []
    }

changeSelect = (event) => {
        this.setState({
            selectedDepartment: event.target.value
        })
        
        axios.post('http://192.168.123.90/max/briefs/api.php', {get_briefs_by_department: event.target.value}).then(resp=> {
            this.setState({
                briefs: resp.data
            })
        })
    }

componentDidMount = () =>{
        axios.post('http://192.168.123.90/max/briefs/api.php', {get_departments: this.state}).then(resp=> {
            this.setState({
               departments: resp.data
            })
        })
}
render() {
    return (
      <div className="new-brief">
        <select onChange={this.changeSelect} defaultValue="">
            <option value="" disabled>נא לבחור מחלקה</option>
            {this.state.departments.map((input, index) => {
                return(
                    <option type="text" value={input.id} key={index}>{input.name}</option>
                )
            })}
        </select>
                {
                    this.state.briefs.map( ele => {
                        let briefData = JSON.parse(ele.brief)
                        let isActive = null;

                        if(ele.status == 0){
                            isActive = "newBrief";
                        } else if(ele.status == 1){
                            isActive = "activeBrief";
                        } else {
                            isActive = "closedBrief";
                        }
                        return <OutgoingBriefsList status={ele} key={ele.id} brief={briefData} active={isActive}/>
                    })
                }
      </div>
    );
  }
}

export default BriefsByDepartment;