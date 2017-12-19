import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

class Programmers extends Component {
    state = {
        editorState: EditorState.createEmpty(), 
    }

    onEditorStateChange = (editorState) =>{
        this.setState({
            editorState,
        });
    }

    render(){
    return (
        <div>
            <label>
            לקוח:
                <input type="text" value={this.props.someProps.customerName} name="customerName" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            שם הבריף:
                <input type="text" value={this.props.someProps.briefName} name="briefName" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            המשימה:
                <textarea rows="10" cols="70" value={this.props.someProps.mission} name="mission" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
                המשימה:
                <Editor
                    editorState={this.state.editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    />
                </label><br/>
            <label>
            הערות:
                <textarea rows="10" cols="70" value={this.props.someProps.notes} name="notes" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            תוצרים:
                <textarea rows="10" cols="70" value={this.props.someProps.totzarim} name="totzarim" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            קריאטיב:
                <textarea rows="10" cols="70" value={this.props.someProps.creative} name="creative" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            דד ליין:
                <input type="date" value={this.props.someProps.deadline} name="deadline" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            תאריך עליה
                <input type="date" value={this.props.someProps.golivedate} name="golivedate" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            דומיין:
                <input type="text" value={this.props.someProps.domain} name="domain" onChange={this.props.dataHandler}/>
            </label><br/>
            <label>
            שרת:
                <input type="text" value={this.props.someProps.server} name="server" onChange={this.props.dataHandler}/>
            </label><br/>
        </div>
    )
}
}

export default Programmers;
