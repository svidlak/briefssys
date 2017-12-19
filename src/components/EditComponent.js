import React, {Component} from 'react';

class EditComponent extends Component{
    render(){
        console.log(this.props.briefDetails)
        return(
            <div>
                <div>
                    <h3>בריף קיים</h3>
                    <span>שלח הודעה</span>
                    <span>העבר בתוך המחלקה</span>
                    <span>תת בריף</span>
                    <div>
                        מס בריף: {this.props.briefId}<br/>
                        מחלקה: {this.props.briefStatus.department}<br/>
                        שם הבריף: {this.props.briefDetails.briefName}<br/>
                        שם לקוח: {this.props.briefDetails.customerName}<br/>
                        <div>
                            המשימה: {this.props.briefDetails.mission}<br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditComponent;