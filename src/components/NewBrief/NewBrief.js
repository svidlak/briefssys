import React, { Component } from 'react';
import axios from 'axios';

import Afaka from './departments/Afaka';
import Content from './departments/Content';
import Online from './departments/Online';
import Video from './departments/Video';
import Media from './departments/Media';
import Noar from './departments/Teenagers';
import Creative from './departments/Creative';
import Studio from './departments/Studio';
import Programmers from './departments/Programmers';

class NewBrief extends Component {
    state = {
        briefObj: {
            department: '',
            briefName: '',
            customerName: '',
            brand: '',
            sendTo: [],
            mission: '',
            sizes: '',
            platform: '',
            closing: '',
            materials: '',
            version: 0,
            startingDate: '',
            additionalFields: [],
            date: '',
            budget: '',
            creative: '',
            notes: '',
            shooters: '',
            stylus: '',
            meal: '',
            hours: '',
            otherppl: '',
            totzarim: '',
            deadline: '',
            background: '',
            promotion: '',
            social: '',
            projectname: '',
            graphics: '',
            needed: '',
            link: '',
            crowd: '',
            promoend: '',
            copywrite: '',
            domain: '',
            server: '',
            dgashim: '',
            details: '',
            editinghours: '',
            export: '',
            golivedate: '',
            userObj: {
                userName: localStorage.name,
                userId: localStorage.id,
                userEmail: localStorage.email,
                status: 0,
                approved: 0,
                department: 0,
            }
        },
        newField : '',
        departments: [],
        selectedBriefTemp: '',
    }

    handleSubmit = (event) =>{
        event.preventDefault()

        axios.post('http://192.168.123.90/max/briefs/api.php', {new_brief: this.state}).then(resp=> {
            console.log(resp)
            alert('בריף נשמר בהצלחה')
        })
    }

    handleChange = (event) => {
        this.setState({ briefObj: {
            ...this.state.briefObj, 
            [event.target.name]: event.target.value 
        }});
    }

    componentDidMount = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 
        
        today = mm + '/' + dd + '/' + yyyy;

        this.setState({ briefObj: { 
             ...this.state.briefObj, 
             startingDate: today
            }
        });
    }

    addNewField = (event) => {
        this.setState({
            newField: event.target.value
        })
    }

    addNewFieldToForm = () => {
        let newArr = this.state.briefObj.additionalFields;
        newArr.push({fieldName: this.state.newField, fieldValue: ''});

        this.setState({briefObj:{
            ...this.state.briefObj,
            additionalFields: newArr
        }})
    }

    changeNewInput = (event, index) => {
        let newProp = this.state.briefObj.additionalFields;
        newProp[index].fieldValue = event.target.value
        this.setState({briefObj:{
            ...this.state.briefObj,
            additionalFields: newProp
        }})
    }

    changeSelect = (event) => {
        this.setState({
            selectedBriefTemp: event.target.value
        })

    }

    componentDidMount = () =>{
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
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

        <div className="new-brief-wrapper">
            <form onSubmit={this.handleSubmit}>
              {(() => {
                          switch(this.state.selectedBriefTemp) {
                            case '1':
                                return <Online someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '2':
                                return <Afaka someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '3':
                                return <Video someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '4':
                                return <Media someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '5':
                                return <Noar someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '6':
                                return <Studio someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '7':
                                return <Creative someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '8':
                                return <Content someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            case '9':
                                return <Programmers someProps={this.state.briefObj} dataHandler={this.handleChange}/>
                                break;
                            default:
                                return '';
                        }
              })()}

            {this.state.briefObj.additionalFields.map((input, index) => {
                return(
                    <label key={index}>
                    {input.fieldName}:
                    <input type="text" value={input.fieldValue} key={index} onChange={(e) => this.changeNewInput(e, index)}/><br/>
                    </label>
                )
            })}
            <input type="text" value={this.state.newField}  onChange={this.addNewField} />
            <input type="button" value="הוספת שדה חדש"  onClick={this.addNewFieldToForm}/><br/>

            <input type="submit" value="שלח"/>
            <input type="button" value="שמור כטיוטה"/>
            </form>
        </div>
      </div>
    );
  }
}

export default NewBrief;