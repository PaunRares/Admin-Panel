import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { updateUser } from '../../redux/actions/userAction';
import './UserAddForm.css';
import FormInput from './FormInput';

class UserAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            name: '',
            email: '',
            isGoldClient: false
        }   
    }
    getMaxId(users){
        const maxId = users.reduce((acc, obj) => {
            return Math.max(acc, obj.id)
        },0)
        return maxId+1;
    }
    randomSalary(min, max) {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }
    newUser(){
        const newUser = {...this.state}
        newUser.salary = this.randomSalary(3000, 6000)
        newUser.id = this.getMaxId(this.props.users)
        return [newUser];
    }
    handleInputChange(event) {
        return this.setState({[event.target.name]: event.target.value})
    }
    handleCheckboxChange(event) {
        return this.setState({isGoldClient: event.target.checked})
    }
    handleFocused() {
        return this.setState({focused: true})
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addUser(this.newUser());
    }
    
    render() {
        
        return (
            <div className="UserAddForm d-flex justify-content-center">
                <form className="d-flex flex-column align-items-center p-5 " onSubmit={(event) => this.handleSubmit(event)}>
                    <h2 className="pb-3 fs-3">Adauga utilizatori</h2>
                    <FormInput 
                        type = "text"
                        name = "name"
                        onChange = {(event) => {this.handleInputChange(event)}}
                        pattern = "^[A-Za-z0-9]{3,16}$"
                        label = "Nume"
                        span = "Intre 3-16 litere si fara caractere speciale"
                    />
                    <FormInput 
                         type = "email"
                         name = "email"
                         onChange = {(event) => {this.handleInputChange(event)}}
                         label = "Email"
                         span = "Introdu un email valid"
                    />
                    <label className="mt-1" htmlFor="isGoldClient">Client Gold ?</label>
                    <input className="mb-3" type="checkbox" name="isGoldClient" onChange={(event) => this.handleCheckboxChange(event)}/>
                    <input className="btn btn-dark mb-2" type="submit" value="Adauga Utilizatorul"/>
                    <Link to="/about">
                        <button className="btn btn-dark btn-sm ">Despre Proiect</button>
                    </Link>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUser: (payload) =>{dispatch(updateUser(payload))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);
