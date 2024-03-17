import '../scss/dashboard.scss';
import DisplayUserEpargne from './components/displayUserEpargne.js'
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
      <div id="body-dashboard">
        <h1>Bienvenue {location.state.user.username}</h1>
        <div className='list-of-cards'>
          <div id='display-user-epargne'>
            <DisplayUserEpargne 
              userEpargne = {location.state.user.totalExpense}
            />
          </div>
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