import '../../scss/displayUserEpargne.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const ExpenseByMonth = ({ userid }) => {
  const [data, setData] = useState([]);
  const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  useEffect(() => {
    fetchData();
  }, []);

  const byMonth = () => {
    let expenses = [];
    for (let i = 0; i < data.length; i++) {
      let date = new Date(data[i].dateOfExpense);
      expenses[date.getMonth()] = parseFloat(data[i].amount);
    }

    const expensesMonth = month.map((mon, index) => {
      if (expenses[index] === undefined) {
        return [mon, 0];
      }
      return [mon, expenses[index]];
    });
    return expensesMonth;
  }

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/expense/' + userid);
    const data = await response.json();
    setData(data);
    return data;
  }

  return (
    <div className='graph'>
      <div id='graph_container'>
        <AnyChart
          type='column'
          data={byMonth()}
          title='Dépenses mensuelles'
        />
      </div>
    </div>
  );
}

export default ExpenseByMonth;