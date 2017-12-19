import React, { Component } from 'react';
import axios from 'axios';

import OutgoingBriefsList from '../OutgoingBriefs/OutgoingBriefsList'

class ClosedBriefs extends Component {
    state = {
        departments: [],
        selectedDepartment: 0,
        briefs: []
    }

componentDidMount = () =>{
        axios.post('http://192.168.123.90/max/briefs/api.php', {get_closed_briefs: this.state}).then(resp=> {
            this.setState({
               departments: resp.data
            })
        })
}
render() {
    return (
      <div className="new-brief">
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

export default ClosedBriefs;