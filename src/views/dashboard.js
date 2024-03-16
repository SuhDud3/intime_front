import '../scss/dashboard.scss';
import Header from './components/header';
import Footer from './components/footer';
import DisplayUserEpargne from './components/displayUserEpargne.js'
import ExpenseByMonth from './components/expenseByMonth.js'
import ExpenseByCategory from './components/expenseByCategory.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Dashboard() {

  const location = useLocation();


  return (
    <div>
      <Header />
      <div id="body-dashboard">
        <h1>Bienvenue {location.state.user.username}</h1>
        <div className='list-of-cards'>
          <div id='display-user-epargne'>
            <DisplayUserEpargne 
              userEpargne = {location.state.user.totalExpense}
            />
          </div>
        </div>
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
      <Footer />
    </div>
  );
}

export default Dashboard;