import React from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../redux/actions/userAction';
import './UserItem.css';

function UserItem(props) {
    const{name, image, email, salary, isGoldClient, removeUser, id } = props;
  return (
      <div className="col-md-4 col-sm-6 col-xs-12 mb-3">
        <div className="UserItem card h-100 position-relative">
            <div className="display-flex justify-content-center align-items-center">
                <img src={image} alt="User" className="w-25 card-img-top" />
            </div>
            <div className="card-body d-flex flex-column justify-content-around">
                <p className="card-text">{name}</p>
                <p className="card-text">{email}</p>
                <p className="card-text">{salary} Lei</p>
                {
                    isGoldClient
                    ?<p className="gold-badge">Gold</p>
                    :null
                }
                <button onClick={() => removeUser(id)} className="btn btn-secondary mx-auto">Sterge</button>
            </div>
            
        </div>
      </div>
    );
}
function mapDispatchToProps(dispatch) {
    return {
        removeUser :(payload) =>{dispatch(removeUser(payload))}
    }
}

export default connect(null, mapDispatchToProps)(UserItem);
