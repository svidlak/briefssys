import React from 'react';

const media = ( props ) => {
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
            זירה:
                <input type="text" value={props.someProps.social} name="social" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            לינק:
                <input type="text" value={props.someProps.link} name="link" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            קהל יעד:
                <input type="text" value={props.someProps.crowd} name="crowd" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            סיום קידום:
                <input type="text" value={props.someProps.promoend} name="promoend" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            תקציב:
                <input type="text" value={props.someProps.budget} name="budget" onChange={props.dataHandler}/>
            </label><br/>
            <label>
            קופי:
                <textarea rows="10" cols="70" value={props.someProps.copywrite} name="copywrite" onChange={props.dataHandler}/>
            </label><br/>
        </div>
    )
}

export default media;
