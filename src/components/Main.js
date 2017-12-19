import React, { Component } from 'react';
// import axios from 'axios';

// import OutgoingBriefsList from '../OutgoingBriefs/OutgoingBriefsList'

class MainComp extends Component {
    state = {
        departments: [],
        selectedDepartment: 0,
        briefs: []
    }

// componentDidMount = () =>{
//         axios.post('http://192.168.123.90/max/briefs/api.php', {get_closed_briefs: this.state}).then(resp=> {
//             this.setState({
//                departments: resp.data
//             })
//         })
// }
render() {
    return (
      <div className="">
            wawa
      </div>
    );
  }
}

export default MainComp;