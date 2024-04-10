import '../../scss/incomeByMonth.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import AnyChart from 'anychart-react';

const IncomeByMonth = ({ userid }) => {
    const [data, setData] = useState([]);
    const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const byMonth = () => {
        let incomes = [];
        for (let i = 0; i < data.length; i++) {
        let date = new Date(data[i].dateOfIncome);
        incomes[date.getMonth()] = parseFloat(data[i].amount);
        }
    
        const incomesMonth = month.map((mon, index) => {
        if (incomes[index] === undefined) {
            return [mon, 0];
        }
        return [mon, incomes[index]];
        });
        return incomesMonth;
    }
    
    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/income/user/' + userid);
        const data = await response.json();
        setData(data.income);
    }
    
    return (
        <div className='graph'>
        <div>
            {data.length === 0 ? (
            <p>Vous n'avez pas encore de revenus</p>
            ) : (
                <AnyChart
                id='graph-container-income-by-month'
                type='column'
                data={byMonth()}
                title='Revenus mensuels'
            />
            )}
        </div>
        </div>
    );
}

export default IncomeByMonth;