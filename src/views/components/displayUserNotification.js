import '../../scss/displayUserNotification.scss';
import { useState, useEffect } from 'react';

function DisplayUserNotification(props) {

        let userNotification = props.userNotification;
    
        return (
            <div className='card' id='card-display-user-notification'>
                <p className='card-title'>Notifications</p>
                {userNotification === '' || userNotification === null || userNotification === undefined ?
                    <p>Vous n'avez pas de notification</p> :
                    <p id='notification'>{userNotification}</p>
                }
            </div>
        );
    }

export default DisplayUserNotification;