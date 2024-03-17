import '../scss/analysis.scss';
import ExpenseByMonth from './components/expenseByMonth.js'
import ExpenseByCategory from './components/expenseByCategory.js';
import Sidebar from './components/sidebar.js'
import { useLocation } from 'react-router-dom';

function Analysis() {

  const location = useLocation();

  return (
    <div>
      <Sidebar 
        user = {location.state.user}
      />
      <div id="body-analysis">
        <div id='user-expense-monthly'>
          <ExpenseByMonth 
            userid = {location.state.user.userID}
          />
        </div>
        <div id='user-expense-category'>
          <ExpenseByCategory 
            userid = {location.state.user.userID}
          />
        </div>
      </div>
    </div>
  );
}

export default Analysis;