import '../../scss/displayUserEpargne.scss';
import { useState, useEffect } from 'react';

function DisplayUserEpargne({ userEpargne }) {

    return (
        <div className='card' id='card-display-user-epargne'>
            <p className='card-title'>Votre épargne</p>
            <p id='number'>{userEpargne} €</p>
        </div>
    );
}

export default DisplayUserEpargne;
