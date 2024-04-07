import '../../scss/expenseByCategory.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import AnyChart from 'anychart-react';

const ExpenseByCategory = ({ userid }) => {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchExpenses();
  }, []);

  const expensesByCategory = () => {
    let expensesByCategory = [];
    for (let i = 0; i < expenses.length; i++) {
      let category = expenses[i].categoryID;
        let amount = parseFloat(expenses[i].amount);
        if (categories[category - 1] === undefined) {
          continue;
        } else {
            let categoryName = categories[category - 1].categoryName;
            if (expensesByCategory.some(e => e.x === categoryName)) {
                let index = expensesByCategory.findIndex(e => e.x === categoryName);
                expensesByCategory[index].value += amount;
            } else {
            expensesByCategory.push({x: categoryName, value: amount});
            }   

        }
    }
    
        return expensesByCategory;
}

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:5000/category/');
    const data = await response.json();
    console.log("expense by category", data);
    setCategories(data);
    return data;
  }

  const fetchExpenses = async () => {
    const response = await fetch('http://localhost:5000/expense/' + userid);
    const data = await response.json();
    console.log("expense by category", data);
    setExpenses(data);
    return data;
  }

  return (
    <div className='graph'>
      <div>
        <AnyChart
          id='graph-container-expense-by-category'
          type='pie'
          data={expensesByCategory()}
          title='Dépenses par catégorie'
        />
      </div>
    </div>
  );
}

export default ExpenseByCategory;