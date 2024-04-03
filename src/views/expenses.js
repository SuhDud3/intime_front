import '../scss/expenses.scss';
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
            <h1>Expenses</h1>
            <div id='user-expense'>
            <p>Expense: {location.state.user.totalExpense}</p>
            </div>
        </div>
        </div>
    )
}

export default Expenses;