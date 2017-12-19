import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../App.css';

import NewBrief from './NewBrief/NewBrief'
import TemplateBrief from './TemplateBrief/TemplateBrief'
import OutgoingBriefs from './OutgoingBriefs/OutgoingBriefs'
import IncomingBriefs from './IncomingBriefs/IncomingBriefs'
import Data from './Data/Data'
import ClosedBriefs from './ClosedBriefs/ClosedBriefs'
import BriefsByDepartments from './BriefsByDepartments/BriefsByDepartment'
import MainComp from './Main'

class userLoggedIn extends Component {
  render(){
      let level;
      if(localStorage.level == 3){
        level = <li>ניהול בריפים</li>
      } else {
        level = ''
      }
        return(
          <Router>
          <div className="route-ul">
            <ul>
              <li><Link to="/newbrief">בריף חדש</Link></li>
              <li><Link to="/outgoingbriefs">בריפים יוצאים</Link></li>
              <li><Link to="/incomingbriefs">בריפים נכנסים</Link></li>
              <li><Link to="/templatebrief">טיוטה</Link></li>
              <li><Link to="/briefsbydepartments">בריפים לפי מחלקות</Link></li>
              <li><Link to="/closedbriefs">בריפים סגורים</Link></li>
              <li><Link to="/data">דאטה</Link></li>
              {level}
            </ul>
    
            <hr />
            <Route exact path="/" component={MainComp}/>
            <Route exact path="/newbrief" component={NewBrief}/>
            <Route exact path="/outgoingbriefs" component={IncomingBriefs}/>
            <Route exact path="/incomingbriefs" component={IncomingBriefs}/>
            <Route exact path="/templatebrief" component={TemplateBrief}/>
            <Route exact path="/briefsbydepartments" component={BriefsByDepartments}/>
            <Route exact path="/closedbriefs" component={ClosedBriefs}/>
            <Route exact path="/data" component={Data}/>
          </div>
          </Router>
        );
    }
} 

export default userLoggedIn; 