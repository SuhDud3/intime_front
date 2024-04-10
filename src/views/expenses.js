import '../scss/expenses.scss';
import DisplayUserTotalExpenses from './components/displayUserTotalExpenses';
import HistoricExpenses from './components/historicExpenses';
import AddExpense from './components/addExpense';
import Sidebar from './components/sidebar';
import { useLocation } from 'react-router-dom';

function Expenses() {

    const location = useLocation();
    
    return (
        <div>
        <Sidebar 
            user = {location.state.user}
        />
        <div className="main" id="body-expenses">
            <h1>Dépenses</h1>
            <div id='user-expense'>
                <DisplayUserTotalExpenses 
                    userID = {location.state.user.userID}
                    userHourlyWage = {location.state.user.paidByHour}
                />
            </div>
            <div id='add-expense'>
                <AddExpense 
                    user = {location.state.user}
                />
            </div>
            <div id='historic-expenses'>
                <HistoricExpenses 
                    userID = {location.state.user.userID}
                />
            </div>
        </div>
        </div>
    )
}

export default Expenses;