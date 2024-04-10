import '../scss/analysis.scss';
import ExpenseByMonth from './components/expenseByMonth.js'
import ExpenseByCategory from './components/expenseByCategory.js';
import DisplayUserTotalExpenses from './components/displayUserTotalExpenses.js';
import Sidebar from './components/sidebar.js'
import { useLocation } from 'react-router-dom';

function Analysis() {

  const location = useLocation();

  return (
    <div>
      <Sidebar 
        user = {location.state.user}
      />
      <div className="main" id="body-analysis">
        <h1>Analyse des dépenses</h1>
        <div id='user-expense'>
                <DisplayUserTotalExpenses 
                    userID = {location.state.user.userID}
                    userHourlyWage = {location.state.user.paidByHour}
                />
            </div>
        <div className='graph' id='user-expense-monthly'>
          <ExpenseByMonth 
            userid = {location.state.user.userID}
          />
        </div>
        <div className='graph' id='user-expense-category'>
          <ExpenseByCategory 
            userid = {location.state.user.userID}
          />
        </div>
      </div>
    </div>
  )
}

export default Analysis;