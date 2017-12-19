import React from 'react';
import './OutgoingBriefsList.css'

const OutgoingBriefsList = (props) => {
    return(
        <div className={"OutgoingBriefsList " + props.active} onClick={() => props.clickHandler(props.status.id, props.status, props.brief)}>
            <span><b>מספר בריף:</b>{props.status.id}</span>
            <span><b>שם בריף:</b> {props.brief.briefName}</span>
            <span><b>מחלקה:</b> {props.brief.briefName}</span>
            <span><b>לקוח:</b> {props.brief.customerName}</span>
            <span><b>מאת:</b> {props.status.user_name}</span>
            <span><b>מנהל לקוח:</b> </span>
            <span><b>סטטוס:</b> {props.status.status}</span>
            <span><b>תאריך סיום:</b> {props.brief.golivedate}</span>
        </div>
    )
}

export default OutgoingBriefsList;