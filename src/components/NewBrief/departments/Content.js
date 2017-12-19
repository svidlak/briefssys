import React from 'react';

const content = ( props ) => {
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
            תוצרים:
                <textarea rows="10" cols="70" value={props.someProps.totzarim} name="totzarim" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            המשימה:
                <textarea rows="10" cols="70" value={props.someProps.mission} name="mission" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דד ליין:
                <input type="date" value={props.someProps.deadline} name="deadline" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            רקע:
                <input type="text" value={props.someProps.background} name="background" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            קידום:
                <input type="text" value={props.someProps.promotion} name="promotion" onChange={props.dataHandler}/>
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

export default content;
