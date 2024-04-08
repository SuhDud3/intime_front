import '../../scss/historicExpenses.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HistoricExpenses() {

    const location = useLocation();

    const userID = location.state.user.userID;

    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [expensesWithCategories, setExpensesWithCategories] = useState([]);

    useEffect(() => {
        if(expensesWithCategories.length === 0 && expenses.length > 0 && categories.length > 0) {
            combineExpensesAndCategories();
        }
    }
    , [expenses, categories]);

    useEffect(() => {
        fetchExpenses();
        fetchCategories();
    }, []);

    const fetchExpenses = async () => {
        const response = await fetch("http://localhost:5000/expense/" + userID);
        const data = await response.json();
        setExpenses(data);
    }

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/category/');
        const data = await response.json();
        setCategories(data);
    }

    function combineExpensesAndCategories () {
        let expensesWithCategoriesTemp = [];
        for (let i = 0; i < expenses.length; i++) {
            let expense = expenses[i];
            let category = categories.find(category => category.categoryID === expense.categoryID); 
            expensesWithCategoriesTemp.push({
                expenseID: expense.expenseID,
                dateOfExpense: expense.dateOfExpense,
                category: category.categoryName,
                amount: expense.amount
            });
        }

        setExpensesWithCategories(expensesWithCategoriesTemp);
    }

    return (
        <div className='card' id='card-historic-expenses'>
            <p className='card-title'>Vos dépenses</p>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Catégorie</th>
                        <th>Montant</th>
                    </tr>
                </thead>
                <tbody>
                    {expensesWithCategories.map(expense => (
                        <tr key={expense.expenseID}>
                            <td>{expense.dateOfExpense}</td>
                            <td>{expense.category}</td>
                            <td>{expense.amount} €</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HistoricExpenses;