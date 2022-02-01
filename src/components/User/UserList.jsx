import React from 'react';
import UserItem from './UserItem';
import profileImage from '../../assets/images/profile-image.png';
import './UserList.css'

function UserList(props) {
  const {users} = props;
  
  
  return (
      <div className="UserList container">
        <h2 className="fst-italic my-5">Lista Utilizatori</h2>
        <div className="row">
                {
                    users.map(user => {
                        return(
                            <UserItem
                                name = {user.name}
                                email = {user.email}
                                key = {user.id}
                                image = {profileImage}
                                salary = {user.salary}
                                id = {user.id}
                                isGoldClient = {user.isGoldClient}
                            />
                        );
                    })
                }
        </div>
      </div>
    );
}

export default UserList;
