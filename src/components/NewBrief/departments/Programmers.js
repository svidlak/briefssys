import React from 'react';

const programmers = ( props ) => {
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
            הערות:
                <textarea rows="10" cols="70" value={props.someProps.notes} name="notes" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            תוצרים:
                <textarea rows="10" cols="70" value={props.someProps.totzarim} name="totzarim" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            קריאטיב:
                <textarea rows="10" cols="70" value={props.someProps.creative} name="creative" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דד ליין:
                <input type="date" value={props.someProps.deadline} name="deadline" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            תאריך עליה
                <input type="date" value={props.someProps.golivedate} name="golivedate" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דומיין:
                <input type="text" value={props.someProps.domain} name="domain" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            שרת:
                <input type="text" value={props.someProps.server} name="server" onChange={props.dataHandler}/>
            </label><br/>
        </div>
    )
}

export default programmers;
