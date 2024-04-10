import '../../scss/displayUserTotalExpenses.scss';
import { useState, useEffect } from 'react';

function DisplayUserTotalExpenses({ userID, userHourlyWage }) {
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        calculateTotalExpenses();
    }
    , []);

    const calculateTotalExpenses = async () => {
        const response = await fetch("http://localhost:5000/expense/" + userID);
        const data = await response.json();
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += parseFloat(data[i].amount);
        }
        setTotalExpenses(total);
    }

    const checkType = (value) => {
        if (typeof value === 'string' && value.includes(',')) {
            return parseFloat(value.replace(',', '.'));
        } else {
            return value;
        }
    }

    return (
        <div className='card' id='card-display-user-total-expenses'>
            <div>
                <p className='card-title'>Votre total de dépenses</p>
                <p id='number'>{totalExpenses} €</p>
            </div>
            <div>
                <p className='card-title'>Conversion en heures de travail</p>
                {userHourlyWage === '' || userHourlyWage === null || userHourlyWage === undefined || userHourlyWage === 0 ? 
                    <p>Veuillez renseigner votre salaire horaire pour obtenir la conversion en heures de travail</p> : 
                    <p id='number'>{(totalExpenses / checkType(userHourlyWage)).toFixed(2)} heures</p>
                }
                
            </div>
        </div>
        
    );
}

export default DisplayUserTotalExpenses;
