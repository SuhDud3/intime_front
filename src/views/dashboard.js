import '../scss/dashboard.scss';
import DisplayUserEpargne from './components/displayUserEpargne.js'
import DisplayUserTotalExpenses from './components/displayUserTotalExpenses.js';
import DisplayUserNotification from './components/displayUserNotification.js'
import Sidebar from './components/sidebar.js'
import { useLocation } from 'react-router-dom';


function Dashboard() {

  const location = useLocation();

  return (
    <div>
      <Sidebar 
        user = {location.state.user}
      />
      <div className="main" id="body-dashboard">
        <h1>Bienvenue {location.state.user.username}</h1>
        <div className='list-of-cards'>
          <div id='display-user-total-expenses'>
            <DisplayUserTotalExpenses 
              userID = {location.state.user.userID}
              userHourlyWage = {location.state.user.paidByHour}
            />
          </div>
        </div>
        <div id='user-notification'>
          <DisplayUserNotification 
            userNotification = {location.state.user.notifications}
          />
        </div>
        <div id='user-notification'>
          <DisplayUserNotification 
            userNotification = {location.state.user.notifications}
          />
        </div>
        <div id='user-notification'>
          <DisplayUserNotification 
            userNotification = {location.state.user.notifications}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;