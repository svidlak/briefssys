import React from 'react';

const creative = ( props ) => {
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
            תוצר גרפי:
                <input type="text" value={props.someProps.graphics} name="graphics" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            רקע:
                <input type="text" value={props.someProps.background} name="background" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            נדרש:
                <input type="text" value={props.someProps.needed} name="needed" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דד ליין:
                <input type="date" value={props.someProps.deadline} name="deadline" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            זירה:
                <input type="text" value={props.someProps.social} name="social" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            הערות:
                <textarea rows="10" cols="70" value={props.someProps.notes} name="notes" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            חומרים:
                <input type="text" value={props.someProps.materials} name="materials" onChange={props.dataHandler}/>
            </label><br/>
        </div>
    )
}

export default creative;
