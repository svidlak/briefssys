import React, {Component} from 'react';
import axios from 'axios';

import OutgoingBriefsList from '../OutgoingBriefs/OutgoingBriefsList';
import EditComponent from '../EditComponent';

import Afaka from '../DepartmentsToPopulate/Afaka';
import Content from '../DepartmentsToPopulate/Content';
import Creative from '../DepartmentsToPopulate/Creative';
import Media from '../DepartmentsToPopulate/Media';
import Online from '../DepartmentsToPopulate/Online';
import Programmers from '../DepartmentsToPopulate/Programmers';
import Studio from '../DepartmentsToPopulate/Studio';
import Noar from '../DepartmentsToPopulate/Teenagers';
import Video from '../DepartmentsToPopulate/Video';

import Buttons from '../DepartmentsToPopulate/Buttons';

class IncomingBriefs extends Component{
    state = {
        department: localStorage.department,
        briefs: [],
        briefId: null,
        briefStatus: null,
        briefDetails: null,
        usersList: [],
        userId: localStorage.id,
    }
    componentDidMount = () => {
        if(window.location.pathname == '/incomingbriefs'){
            axios.post('http://192.168.123.90/max/briefs/api.php', {get_incoming_briefs: this.state.department}).then(resp=> {
                this.setState({
                    briefs: resp.data
                })
            })
            axios.post('http://192.168.123.90/max/briefs/api.php', {get_users_list: true}).then(resp=>{
                this.setState({
                    usersList: resp.data
                })
            })
        } else {
            axios.post('http://192.168.123.90/max/briefs/api.php', {get_outgoing_briefs: this.state.userId}).then(resp=> {
                this.setState({
                    briefs: resp.data
                })
            })
        }
    }
    
    test = (test, status, details) => {
        
        this.setState({
            briefStatus:status,
            briefDetails: details,
            briefId: test
        })
    }

    returnToNormal = () => {
        this.setState({
            briefId: null
        })
    }

    handleChange = (event) => {
        this.setState({ briefDetails: {
            ...this.state.briefDetails, 
            [event.target.name]: event.target.value
        }});
    }

    handleSave = () =>{
        this.setState({
            returnWithNote: true
        })
    }

    acceptBriefHandler = (userlist) => {
        // console.log(userlist)
        // console.log(this.state)
        axios.post('http://192.168.123.90/max/briefs/api.php', {accept_new_brief: [this.state.briefId, this.state.briefDetails, userlist, localStorage.id]}).then(resp=>{
            console.log(resp);
        })
    }
    render(){
        if(this.state.briefId){
            let editable = null;
            let saveable = null;
            let buttons = null;
            if(localStorage.level == '3'){
                editable = this.handleChange
                saveable = this.handleSave
                buttons = <Buttons acceptBriefHandler={this.acceptBriefHandler} usersList={this.state.usersList}/>
            }
                switch(this.state.briefStatus.department) {
                  case '1':
                      return (<div><Online 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '2':
                      return (<div><Afaka 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '3':
                      return (<div><Video 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '4':
                      return (<div><Media briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                      {buttons}
                      <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '5':
                      return (<div><Noar 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '6':
                      return (<div><Studio 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '7':
                      return (<div><Creative 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '8':
                      return (<div><Content 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      briefDetails={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                        {buttons}
                        <input type="button" value="חזרה" onClick={this.returnToNormal} />
                      </div>)
                      break;
                  case '9':
                      return (<div><Programmers 
                      briefId={this.state.briefId} 
                      briefStatus={this.state.briefStatus} 
                      someProps={this.state.briefDetails} 
                      dataHandler={editable}
                      />
                    {buttons}
                    <input type="button" value="חזרה" onClick={this.returnToNormal} />
                    </div>);
                      break;
                  default:
                      return 'wawa';
              }
        } else {
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
                        return <OutgoingBriefsList status={ele} key={ele.id} brief={briefData} active={isActive} clickHandler={this.test}/>
                    })
                }
            </div>
        )
    }
    }
}

export default IncomingBriefs;