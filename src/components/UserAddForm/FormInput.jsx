import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
    }
    handelFocus(){
        return this.setState({focused: true})
    }
  render() {
    const {label, name, span, type, onChange, pattern } = this.props;
    return (
        <div className="FormInput">
            <input  type={type} name={name} pattern={pattern} onChange={(event)=>{onChange(event)}} onBlur={()=>this.handelFocus()} focus={this.state.focused.toString()} placeholder={label}  required/>
            <span>{span}</span>
        </div>
    );
  }
}

export default FormInput;
