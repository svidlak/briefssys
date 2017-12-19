import React, {Component} from 'react';
import axios from 'axios';

import OutgoingBriefsList from './OutgoingBriefsList';

class OutgoingBriefs extends Component{
    state = {
        userId: localStorage.id,
        briefs: [],
    }
    componentDidMount = () => {
        axios.post('http://192.168.123.90/max/briefs/api.php', {get_outgoing_briefs: this.state.userId}).then(resp=> {
            this.setState({
                briefs: resp.data
            })
        })
    }

    render(){
        return(
            <div>
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

                        return <OutgoingBriefsList status={ele} key={ele.id} brief={briefData} active={isActive} />
                        // return <OutgoingBriefsList clickHandler={this.test}/>
                    })
                }
            </div>
        )
    }
}

export default OutgoingBriefs;