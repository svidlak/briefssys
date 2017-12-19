import React from 'react';

const video = ( props ) => {
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
            המשימה:
                <textarea rows="10" cols="70" value={props.someProps.mission} name="mission" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            פירוט הסרטון:
                <textarea rows="10" cols="70" value={props.someProps.details} name="details" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דד ליין:
                <input type="date" value={props.someProps.deadline} name="deadline" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            שעות עריכה:
                <input type="text" value={props.someProps.editinghours} name="editinghours" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            אקספורט:
                <input type="text" value={props.someProps.export} name="export" onChange={props.dataHandler}/>
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

export default video;
