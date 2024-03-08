import '../scss/dashboard.scss';
import Header from './components/header';
import Footer from './components/footer';
import DisplayUserEpargne from './components/displayUserEpargne.js'
import UserExpenseMonthly from './components/userExpenseMonthly.js';
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
          <UserExpenseMonthly 
            userid = {location.state.user.userID}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;