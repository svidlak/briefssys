import React from 'react';

const online = ( props ) => {
    return (
        <div>
            <label>
            לקוח:
                <input type="text" value={props.someProps.customerName} name="customerName" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            שם הבריף:
                <input type="text" value={props.someProps.briefName} name="briefName" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            שם הפרוייקט:
                <input type="text" value={props.someProps.projectname} name="projectname" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            המשימה:
                <textarea rows="10" cols="70" value={props.someProps.mission} name="mission" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            לינק:
                <input type="text" value={props.someProps.link} name="link" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דד ליין:
                <input type="date" value={props.someProps.deadline} name="deadline" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            הערות:
                <textarea rows="10" cols="70" value={props.someProps.notes} name="notes" onChange={props.dataHandler}/>
            </label><br/>
        </div>
    )
}

export default online;
