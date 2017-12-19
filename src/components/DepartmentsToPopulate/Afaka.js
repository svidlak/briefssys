import React from 'react';

const afaka = ( props ) => {
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
            תאריך צילום:
                <input type="date" value={props.someProps.date} name="date" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            תקציב:
                <input type="text" value={props.someProps.budget} name="budget" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            קריאטיב:
                <textarea rows="10" cols="70" value={props.someProps.creative} name="creative" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            דגשים:
                <textarea rows="10" cols="70" value={props.someProps.notes} name="notes" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            מצטלמים:
                <textarea rows="10" cols="70" value={props.someProps.shooters} name="shooters" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            סטילס:
                <input type="text" value={props.someProps.stylus} name="stylus" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            ארוחה:
                <input type="text" value={props.someProps.meal} name="meal" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            שעות על הסט:
                <input type="text" value={props.someProps.hours} name="hours" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            אנשי מקצוע אחרים:
                <textarea rows="10" cols="70" value={props.someProps.otherppl} name="otherppl" onChange={props.dataHandler}/>
            </label><br/>

            {/* <label>
            גדלים:
                <input type="text" value={props.someProps.sizes} name="sizes" onChange={props.dataHandler}/>
            </label><br/>
            <label>
                פלטפורמה:
                <input type="text" value={props.someProps.platform} name="platform" onChange={props.dataHandler}/>
            </label><br/>
            <label>
                הוראות סגירה:
                <input type="text" value={props.someProps.closing} name="closing" onChange={props.dataHandler}/>
            </label><br/>
            <label>
                חומרים:
                <input type="text" value={props.someProps.materials} name="materials" onChange={props.dataHandler}/>
            </label><br/> */}

        </div>
    )
}

export default afaka;
