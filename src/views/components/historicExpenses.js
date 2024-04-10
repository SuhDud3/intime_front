import '../../scss/historicExpenses.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HistoricExpenses() {

    const location = useLocation();

    const userID = location.state.user.userID;

    const userHourlyWage = location.state.user.paidByHour;

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

    const checkType = (value) => {
        if (typeof value === 'string' && value.includes(',')) {
            return parseFloat(value.replace(',', '.'));
        } else {
            return value;
        }
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
                amount: expense.amount,
                hourEquivalent: expense.amount / checkType(userHourlyWage)
            });
        }

        setExpensesWithCategories(expensesWithCategoriesTemp);
    }

    function sortExpensesByDate() {
        let expensesWithCategoriesTemp = [...expensesWithCategories];
        expensesWithCategoriesTemp.sort((a, b) => {
            let dateA = new Date(a.dateOfExpense);
            let dateB = new Date(b.dateOfExpense);
            return dateB - dateA;
        });

        setExpensesWithCategories(expensesWithCategoriesTemp);
    }

    function sortExpensesByCategory() {
        let expensesWithCategoriesTemp = [...expensesWithCategories];
        expensesWithCategoriesTemp.sort((a, b) => {
            let categoryA = a.category;
            let categoryB = b.category;
            return categoryA.localeCompare(categoryB);
        });

        setExpensesWithCategories(expensesWithCategoriesTemp);
    }

    function sortExpensesByAmount() {
        let expensesWithCategoriesTemp = [...expensesWithCategories];
        expensesWithCategoriesTemp.sort((a, b) => {
            let amountA = a.amount;
            let amountB = b.amount;
            return amountB - amountA;
        });

        setExpensesWithCategories(expensesWithCategoriesTemp);
    }

    function sortExpensesByHourEquivalent() {
        let expensesWithCategoriesTemp = [...expensesWithCategories];
        expensesWithCategoriesTemp.sort((a, b) => {
            let hourA = a.hourEquivalent;
            let hourB = b.hourEquivalent;
            return hourB - hourA;
        });

        setExpensesWithCategories(expensesWithCategoriesTemp);
    }

    return (
        <div className='card' id='card-historic-expenses'>
            <table className='table-neumorphic'>
                <thead>
                    <tr>
                        <th>
                            <button onClick={sortExpensesByDate}>
                                Date
                            </button>
                        </th>
                        <th>
                            <button onClick={sortExpensesByCategory}>
                                Catégorie
                            </button>
                        </th>
                        <th>
                            <button onClick={sortExpensesByAmount}>
                                Montant
                            </button>
                        </th>
                        <th>
                            <button onClick={sortExpensesByHourEquivalent}>
                                Équivalent heures
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {expensesWithCategories.length === 0 ?
                    
                    <tr>
                        <td colSpan='4'>Vous n'avez pas encore de dépenses</td>
                    </tr> :
                        expensesWithCategories.map(expense => (
                            <tr key={expense.expenseID}>
                                <td>{expense.dateOfExpense}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount} €</td>
                                <td>{expense.hourEquivalent.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default HistoricExpenses;