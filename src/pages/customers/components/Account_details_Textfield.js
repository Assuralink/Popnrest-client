import React from 'react';

import { AuthContext } from '../../../context/auth';

class Account_details_Textfield extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toogle: false,
            value: ''
        }
    }

    handleChange = ({ target: { value }}) => {
        this.setState({
            value: value
        })
    }

    handleSave = (user) => {
        this.props.update_fn(user, this.state.value)
        this.setState({ toogle: false })
    }

    render(){

        let user = this.context;

        return (
            <div className="bloc">
                { 
                    this.state.toogle == false ?
                    <div>
                        <div className="bloc _form">
                            {
                                this.props.defaultValue !== "" ?
                                <span>{ this.props.defaultValue }</span>
                                :
                                <span className="not_provided">Not provided</span>
                            } 
                        </div>
                        <button className="toogle_action" onClick={() => this.setState({ toogle: true })} >{ this.props.toogle_label }</button>
                    </div>
                    : 
                    <div>
                        <div className="_form">
                            <input type={ this.props.type } defaultValue={ this.props.defaultValue } onChange={ this.handleChange } />
                        </div>
                        <button className="action" onClick={() => this.handleSave(user) } >Update</button>
                        <button className="cancel" onClick={() => this.setState({ toogle: false })} >Cancel</button>
                    </div>
                }
                
            </div>
        )
    }
}

Account_details_Textfield.contextType = AuthContext;

export default Account_details_Textfield;